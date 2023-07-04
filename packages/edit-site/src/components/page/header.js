/**
 * WordPress dependencies
 */
import {
	__experimentalHeading as Heading,
	__experimentalText as Text,
	__experimentalHStack as HStack,
	FlexBlock,
	FlexItem,
} from '@wordpress/components';

/**
 * Internal dependencies
 */

export default function Header( { title, subTitle, actions, level = 1 } ) {
	return (
		<HStack as="header" alignment="left" className="edit-site-page-header">
			<FlexBlock className="edit-site-page-header__page-title">
				<Heading
					level={ level }
					className="edit-site-page-header__title"
				>
					{ title }
				</Heading>
				{ subTitle && (
					<Text as="p" className="edit-site-page-header__sub-title">
						{ subTitle }
					</Text>
				) }
			</FlexBlock>
			<FlexItem className="edit-site-page-header__actions">
				{ actions }
			</FlexItem>
		</HStack>
	);
}
