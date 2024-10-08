import { __, sprintf } from '@wordpress/i18n';
import { ColorPalette, InspectorControls } from '@wordpress/block-editor';

import './editor.scss';

/**
 *
 * @param {Object} [prop]
 * @param {Object} [prop.attributes]
 * @param {Function} [prop.setAttributes]
 *
 * @return {WPElement} Element to render.
 */
export default function edit( { attributes, setAttributes } ) {
	function onChangeBGColor( content ) {
		setAttributes( { bg_color: content } );
	}

	function onChangeTextColor( content ) {
		setAttributes( { text_color: content } );
	}

	const placeholders = {
		custom_order_name: 1232,
		courier_name: __( 'Courier', 'uafrica-shipping' ),
		id: 'UA123456789',
		status_a: 'delivered',
		status_b: 'in-transit',
		time: new Date().toLocaleString(),
		message: __( '', 'uafrica-shipping' ),
		location: 'CTP',
		courier_phone: '(+27) 0123456789',
	};

	return [
		<InspectorControls key="settting">
			<div id="uafrica-shipping-controlls">
				<fieldset>
					<legend className="blocks-base-control__label">
						{ __( 'Background colour', 'uafrica-shipping' ) }
					</legend>
					<ColorPalette // Element Tag for Gutenberg standard colour selector
						onChange={ onChangeBGColor } // onChange event callback
					/>
				</fieldset>
				<fieldset>
					<legend className="blocks-base-control__label">
						{ __( 'Text colour', 'uafrica-shipping' ) }
					</legend>
					<ColorPalette // Element Tag for Gutenberg standard colour selector
						onChange={ onChangeTextColor } // onChange event callback
					/>
				</fieldset>
			</div>
		</InspectorControls>,
		<div key="render" className="uafrica-shipping-container wp-admin">
			<div key="render" className="shipping-step-status">
				<header>
					<h3>
						{ sprintf(
							// translators: #%s the order number.
							__(
								'Tracking information for order #%s',
								'uafrica-shipping'
							),
							placeholders.custom_order_name
						) }
					</h3>
					<div className="shipping-provider">
						<span className="name">
							{ __( 'Shipping provider:', 'uafrica-shipping' ) }
						</span>
						<span data-uafrica="courier_name">
							{ placeholders.courier_name }
						</span>
					</div>
					<div className="tracking-ua">
						<span className="name">
							{ __( 'Tracking #:', 'uafrica-shipping' ) }
						</span>
						<span data-uafrica="id">{ placeholders.id }</span>
					</div>
					<h4
						className="global-status"
						style={ {
							backgroundColor: attributes.bg_color,
							color: attributes.text_color,
						} }
					>
						<span data-uafrica="status">
							{ placeholders.status_a }
						</span>
					</h4>
				</header>
				<div className="checkpoints">
					<div className="step">
						<div data-uafrica="time">{ placeholders.time }</div>
						<div data-uafrica="icon">
							<div
								className="active delivered"
								style={ {
									backgroundColor: attributes.bg_color,
									color: attributes.text_color,
								} }
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="flag-checkered"
									className="svg-inline--fa fa-flag-checkered fa-w-16"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z"
									></path>
								</svg>
							</div>
						</div>
						<div className="info">
							<div data-uafrica="status">
								{ placeholders.status_a }
							</div>
							<div data-uafrica="message">
								{ placeholders.message }
							</div>
							<div data-uafrica="location">
								{ placeholders.location }
							</div>
						</div>
					</div>
					<div className="step">
						<div data-uafrica="time">{ placeholders.time }</div>
						<div data-uafrica="icon">
							<div className="empty"></div>
						</div>
						<div className="info">
							<div data-uafrica="status">
								{ placeholders.status_b }
							</div>
							<div data-uafrica="message">
								{ placeholders.message }
							</div>
							<div data-uafrica="location">
								{ placeholders.location }
							</div>
						</div>
					</div>
				</div>
				<div className="follow-up">
					{ sprintf(
						// translators: %1$s Courier name %2$s Courier phone number %3$s order ID.
						__(
							'For additional information, please contact %1$s (%2$s) and quote tracking reference %3$s.',
							'uafrica-shipping'
						),
						placeholders.courier_name,
						placeholders.courier_phone,
						placeholders.id
					) }
				</div>
			</div>
		</div>,
	];
}
