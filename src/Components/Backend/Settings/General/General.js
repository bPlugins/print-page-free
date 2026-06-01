import { __, sprintf } from '@wordpress/i18n';
import { PanelBody, ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import { Label, BtnGroup, Notice } from '../../../../../../bpl-tools/Components';
import { iconTypes, defaultIcons, variantOptions } from '../../../../utils/options';
import { PremiumBadge, PremiumPanel } from "../../../../../../bpl-tools/ProControls";
import { variantSwitch } from '../../../../utils/functions';


const General = ({ attributes, setAttributes, pricingURL }) => {
    const { buttonVariant = 'default', isPrintSection, sectionSelector, isIcon, icon = { type: 'default', default: 'fcPrinter', url: '' } } = attributes || {};

    const generalProFeatures = [];
    if (isIcon && 'url' === icon.type) {
        generalProFeatures.push(__('Custom Icon Upload', 'print-page'));
    }
    if (buttonVariant !== 'floatingAction') {
        generalProFeatures.push(__('Show / Hide Text option', 'print-page'));
    }

    let generalNoticeMessage = '';
    if (generalProFeatures.length > 0) {
        const formatted = generalProFeatures.reduce((acc, curr, index) => {
            if (index === 0) return curr;
            if (index === generalProFeatures.length - 1) {
                return sprintf(
                    /* translators: %1$s: list of features, %2$s: last feature */
                    __('%1$s & %2$s', 'print-page'),
                    acc,
                    curr
                );
            }
            return sprintf(
                /* translators: %1$s: list of features, %2$s: next feature */
                __('%1$s, %2$s', 'print-page'),
                acc,
                curr
            );
        }, '');

        generalNoticeMessage = sprintf(
            generalProFeatures.length > 1
                ? __('%s are only available in the Pro version.', 'print-page')
                : __('%s is only available in the Pro version.', 'print-page'),
            formatted
        );
    }

    return (
        <>
            <PanelBody className='bPlPanelBody' title={__('Design Settings', 'print-page')} initialOpen={false} >
                <SelectControl
                    label={__('Select Print Button', 'print-page')}
                    labelPosition="left"
                    value={buttonVariant}
                    options={variantOptions}
                    onChange={(val) => setAttributes(variantSwitch(val, attributes))}
                    help={__(
                        'Some settings will be change when you will select the print button.',
                        'print-page'
                    )}
                />
            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Print Settings', 'print-page')} initialOpen={false}>
                <ToggleControl label={__('Only print a section', 'print-page')} checked={isPrintSection} onChange={val => setAttributes({ isPrintSection: val })} />
                <small>{__('It will be good print! if you print the content section', 'print-page')}</small>

                {isPrintSection && <>
                    <Label>{__('Section Selector:')}</Label>
                    <TextControl value={sectionSelector} onChange={val => setAttributes({ sectionSelector: val })} />
                    <small>{__('Enter html selector. Ex: #id .class', 'print-page')}</small>

                    <Notice status='premium' isIcon={true} className='mt20'>
                        {__('Printing the selected section inside a modal window is only available in the Pro version.', 'print-page')}
                    </Notice>
                </>}
            </PanelBody>

            <PanelBody className="bPlPanelBody" initialOpen={false}
                title={<>
                    {__('Advanced Print Options', 'print-page')}
                    <PremiumBadge />
                </>}
            >
                <PremiumPanel
                    title={__('Advanced Print Options', 'print-page')}
                    description={__(
                        "Show browser header/footer option in print dialog, Page Orientation Options & Remove Elements (CSS Selectors) are available in the Pro version.",
                        "print-page"
                    )}
                    pricingUrl={pricingURL} />
            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Button Elements', 'print-page')} initialOpen={false}>
                <ToggleControl label={__('Show Icon', 'print-page')} checked={isIcon} onChange={val => setAttributes({ isIcon: val })} />

                {isIcon && <>
                    <BtnGroup label={__('Icon Type', 'print-page')} value={icon.type} onChange={val => setAttributes({ icon: { ...icon, type: val } })} options={iconTypes} />

                    {'url' !== icon.type && (
                        <BtnGroup
                            className='mt10'
                            value={icon.default}
                            onChange={val => setAttributes({ icon: { ...icon, default: val } })}
                            options={defaultIcons}
                            isTextIcon={true}
                        />
                    )}
                </>}

                {generalNoticeMessage && (
                    <Notice status='premium' isIcon={true} className='mt15'>
                        {generalNoticeMessage}
                    </Notice>
                )}
            </PanelBody>
        </>
    )
}

export default General;