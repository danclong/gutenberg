WordPress has always been built on the foundation of server-side rendering. Traditionally, when a user requests a WordPress page, the server processes the PHP code, queries the database, and generates the HTML markup that is sent to the browser. This approach has been fundamental to WordPress's functionality, enabling themes and plugins to dynamically generate content before it reaches the user's browser.

In recent years, modern JavaScript frameworks like Vue, React, or Svelte have revolutionized the way we build web applications. These frameworks provide reactive and declarative programming models that enable developers to create dynamic, interactive user interfaces with ease. However, when it comes to server-side rendering, these frameworks require a JavaScript-based server, such as Node.js, to execute their code and generate the initial HTML. This means that PHP-based servers, like WordPress, cannot directly utilize these frameworks without sacrificing their native PHP rendering capabilities. This limitation poses a challenge for WordPress developers who want to leverage the power of reactive and declarative programming while still benefiting from WordPress's traditional server-side rendering strengths.

The Interactivity API bridges this gap by bringing reactive and declarative programming principles to WordPress without compromising its server-side rendering foundation. The Interactivity API's Server Directive Processing capabilities enable WordPress to generate the initial HTML with the correct interactive state, providing a faster initial render. After the initial server-side render, the Interactivity API's client-side JavaScript takes over, enabling dynamic updates and interactions without requiring full page reloads. This approach combines the best of both worlds: the SEO and performance benefits of traditional WordPress server-side rendering, and the dynamic, reactive user interfaces offered by modern JavaScript frameworks.

In this guide, we'll explore how the Interactivity API processes directives on the server, enabling WordPress to deliver interactive, state-aware HTML from the initial page load, while setting the stage for seamless client-side interactivity.

## Understanding how Server Directive Processing works

Let's start with an example where a list of fruits is rendered using the `data-wp-each` directive.

The following are the necessary steps to ensure that the directives are correctly processed by the Server Directive Processing of the Interactivity API during the server-side rendering of WordPress.

### 1. Marking the block as interactive

First, to enable the server directive processing of the block's directives, you need to add `supports.interactivity` to the `block.json`:

```json
{
	"supports": {
		"interactivity": true
	}
}
```

### 2. Initializing the global state or local context

Then, you need to initialize either the global state or the local context that will be used during the server-side rendering of the page.

If you are using global state, you must use the `wp_interactivity_state` function:

```php
wp_interactivity_state( 'myFruitPlugin', array(
    'fruits' => array( 'Apple', 'Banana', 'Cherry' )
));
```

If you are using local context, the initial values are defined with the `data-wp-context` directive itself, either by:

-   Adding it directly to the HTML.

```html
<ul data-wp-context='{ "fruits": ["Apple", "Banana", "Cherry"] }'>
	...
</ul>
```

-   Using the `wp_interactivity_data_wp_context` helper.

```php
<?php
$context = array(
  'fruits' => array( 'Apple', 'Banana', 'Cherry' ),
);
?>
<ul <?php echo wp_interactivity_data_wp_context( $context ); ?>>
  ...
</ul>
```

### 3. Defining the interactive elements using directives

Next, you add the necessary directives to the HTML markup.

```html
<ul data-wp-interactive="myFruitPlugin">
	<template data-wp-each="state.fruits">
		<li data-wp-text="context.item"></li>
	</template>
</ul>
```

-   The `data-wp-interactive` directive activates the interactivity for the DOM element and its children.
-   The `data-wp-each` directive is used to render a list of elements. The directive can be used in `<template>` tags, with the value being a reference path to an array stored in the global state or the local context.
-   The `data-wp-text` directive sets the inner text of an HTML element. Here, it points to `context.item`, which is where the `data-wp-each` directive stores each item of the array.

The exact same directives can also be used when using local context with a `data-wp-context` directive:

```html
<ul
	data-wp-interactive="myFruitPlugin"
	data-wp-context='{ "fruits": ["Apple", "Banana", "Cherry"] }'
>
	<template data-wp-each="context.fruits">
		<li data-wp-text="context.item"></li>
	</template>
</ul>
';
```

The only difference is that `data-wp-each` points to `context.fruits` instead of `state.fruits`.

### 4. The directives are processed and the final HTML is sent to the browser

Once you've set up your block with `supports.interactivity`, initialized your global state and local context, and added the directives to the HTML markup, WordPress takes care of the rest. There's no additional code required from the developer to process these directives on the server side.

Behind the scenes, WordPress uses the `wp_interactivity_process_directives` function to find and process the directives in the HTML markup of your block. This function uses the HTML API to make the necessary changes to the markup based on the directives and the current state or context.

As a result, the HTML markup sent to the browser is already in its final form, with all directives correctly processed. This means that when the page first loads in the browser, it already contains the correct initial state of all interactive elements, without needing any JavaScript to modify it.

This is how the final HTML markup of the fruit list example would look like (directives omitted):

```html
<ul>
	<li>Apple</li>
	<li>Banana</li>
	<li>Cherry</li>
</ul>
```

As you can see, the `data-wp-each` directive has generated a `<li>` element for each fruit in the array, and the `data-wp-text` directive has been processed, populating each `<li>` with the correct fruit name.

This Server Directive Processing provides several benefits:

1. **Faster Initial Render**: The browser receives HTML that's ready to display immediately, without waiting for JavaScript to manipulate the DOM.

2. **Better SEO**: Search engines can easily index the content because it's present in the initial HTML.

3. **Enhanced Performance**: The client-side JavaScript has less work to do on page load, as the initial state is already correctly rendered.

4. **Improved Accessibility**: Users with JavaScript disabled or slow connections see the correct content immediately.

### 5. Continuing the interactivity on the client

One of the key strengths of the Interactivity API is how it bridges the gap between server-side rendering and client-side interactivity. To do so, the global state and local context initialized on the server are also serialized and made available on the client, allowing the application to continue functioning and manipulating the DOM dynamically.

Let's extend the example to include a button that the user can click to add a new fruit to the list:

```html
<button data-wp-on--click="actions.addMango">Add Mango</button>
```

The new button has a `data-wp-on--click` directive that references `actions.addMango`, which is defined in our JavaScript store:

```javascript
const { state } = store( 'myFruitPlugin', {
	actions: {
		addMango() {
			state.fruits.push( 'Mango' );
		},
	},
} );
```

The same example also works when using local context:

```javascript
store( 'myFruitPlugin', {
	actions: {
		addMango() {
			const context = getContext();
			context.fruits.push( 'Mango' );
		},
	},
} );
```

When the user clicks the "Add Mango" button:

1.  The `addMango` action is triggered.
2.  The `'Mango'` item is added to the `state.fruits` or `context.fruits` array.
3.  The Interactivity API automatically updates the DOM, adding a new `<li>` element for the new fruit.

    ```html
    <ul>
    	<li>Apple</li>
    	<li>Banana</li>
    	<li>Cherry</li>
    	<li>Mango</li>
    </ul>
    ```

### 6. Working with derived state

Derived state, regardless of whether it derives from the global state, local context, or both, can also be processed on the server by the Server Directive Processing.

Let's imagine adding a button that can delete all fruits:

```html
<button data-wp-on--click="actions.deleteFruits">Delete all fruits</button>
```

```javascript
store( 'myFruitPlugin', {
	actions: {
		addMango() {
			state.fruits.push( 'Mango' );
		},
		deleteFruits() {
			state.fruits = [];
		},
	},
} );
```

In the same way, using local context:

```javascript
store( 'myFruitPlugin', {
	actions: {
		addMango() {
			const context = getContext();
			context.fruits.push( 'Mango' );
		},
		deleteFruits() {
			const context = getContext();
			context.fruits = [];
		},
	},
} );
```

Now we want to display a special message when there is no fruit. To do this, we will use the `data-wp-bind--hidden` directive and a derived state called `state.hasFruits` that will indicate whether the array is empty or not.

```html
<div data-wp-bind--hidden="!state.hasFruits">No fruits, sorry!</div>
<ul data-wp-interactive="myFruitPlugin">
	<template data-wp-each="state.fruits">
		<li data-wp-text="context.item"></li>
	</template>
</ul>
```

```javascript
const { state } = store( 'myFruitPlugin', {
	state: {
		get hasFruits() {
			return state.fruits.length > 0;
		},
	},
	actions: {
		// ...
	},
} );
```

And the same if we use local context:

```javascript
store( 'myFruitPlugin', {
	state: {
		get hasFruits() {
			const context = getContext();
			return context.fruits.length > 0;
		},
	},
	actions: {
		// ...
	},
} );
```

Up to this point, everything is fine, and when we press the button in the browser, the message will be displayed. The problem is that since `state.hasFruits` is not defined on the server, the `hidden` attribute will not be part of the initial HTML, which means we will also be showing the message until JavaScript loads.

To define the initial value of the derived state, we can use `wp_interactivity_state`.

-   We can define the value directly:

    ```php
    wp_interactivity_state( 'myFruitPlugin', array(
      'fruits'    => array( 'Apple', 'Banana', 'Cherry' ),
      'hasFruits' => true
    ));
    ```

-   Or doing the necessary computation on the server:

    ```php
    $fruits = array( 'Apple', 'Banana', 'Cherry' );
    $hasFruits = count( $fruits ) > 0;

    wp_interactivity_state( 'myFruitPlugin', array(
      'fruits'    => $fruits,
      'hasFruits' => $hasFruits,
    ));
    ```

However, the key point is that the initial value of `state.hasFruits` now resides on the server. This allows the Server Directive Processing to handle the `data-wp-bind--hidden` directive and modify the HTML, adding the `hidden` attribute when needed.

### 7. Serializing values to be consumed on the server

Another important functionality of the Interactivity API is to take advantage of serialization to send processed values from the server that we can then use on the client. This is useful in various scenarios, such as handling translations, for example.

Let's add translations to our block.

```php
wp_interactivity_state( 'myFruitPlugin', array(
  'fruits'    => array( __( 'Apple' ), __( 'Banana' ), __( 'Cherry' ) ),
  'hasFruits' => true
));
```

-   that's it
-   but Mango??
-   Add to state

...

-   dynamic derived state

### Conclusion

This seamless transition from server-rendered content to client-side interactivity provides the best of both worlds: fast initial loads and dynamic user interfaces.

-   The initial list of fruits is rendered on the server using PHP.
-   The global state or local context is initialized on the server and made available to the client.
-   The user ... XXXX
-   The button's click behavior is defined using a directive in the HTML.
-   The actual functionality of adding a fruit is implemented in JavaScript.
-   When a new fruit is added, the DOM updates automatically to reflect the new state.

With the Interactivity API, the transition from server to client is smooth and transparent. The directives you define on the server, the initial global state or local context, and the client-side behavior all form part of the same ecosystem. This unified approach simplifies development, improves maintainability, and provides a better developer experience when creating interactive WordPress blocks.

---

-   Derived state
    -   Add fruit translations
        ```php
        wp_interactivity_state('..', [
          'fruits' => [__('Apple'), __('Banana'), __('Cherry')]
        ]);
        ```
    -   Add also translation for the frontend
        ```php
        wp_interactivity_state('..', [
          'fruits' => ['apple', 'banana', 'cherry'],
          'fruitNames' => [
            'apple'  => __('Apple'),
            'banana' => __('Banana'),
            'cherry' => __('Cherry'),
            'mango'  => __('Mango'),
          ],
          'fruitName' => function() {
            $state   = wp_interactivity_state();
            $context = wp_interactivity_get_context();
            return $state['fruitNames'][ $context['item'] ];
          }
        ]);
        ```

## Working with derived state

## What happens if I don't initialize the global state on the client

## Why can't React components be server-side rendered in WordPress?

## Defining the global state once

## Classic themes (`wp_interactivity_process_directives`)
