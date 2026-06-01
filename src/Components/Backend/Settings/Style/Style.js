import { __, sprintf } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { ColorsControl, Notice } from '../../../../../../bpl-tools/Components';

const Style = ({ attributes, setAttributes }) => {
    const { buttonVariant = 'default', isText, btnColors, btnHoverColors } = attributes || {};

    const proFeatures = [];
    if (isText && buttonVariant !== 'floatingAction') {
        proFeatures.push(__('Text Typography', 'print-page'));
    }
    proFeatures.push(__('Padding', 'print-page'));
    proFeatures.push(__('Border', 'print-page'));
    proFeatures.push(__('Shadow', 'print-page'));
    proFeatures.push(__('Hover Shadow', 'print-page'));

    const formattedFeatures = proFeatures.reduce((acc, curr, index) => {
        if (index === 0) return curr;
        if (index === proFeatures.length - 1) {
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

    const noticeMessage = sprintf(
        /* translators: %s: list of formatted pro features */
        __('%s are available in the Pro version.', 'print-page'),
        formattedFeatures
    );

    return (
        <>
            <PanelBody className='bPlPanelBody' title={__('Button', 'print-page')}>
                <ColorsControl
                    value={btnColors}
                    onChange={val => setAttributes({ btnColors: val })}
                    defaults={{ color: '#4527a4', bg: '#4527a433' }}
                />

                <ColorsControl
                    label={__('Hover Colors:', 'print-page')}
                    value={btnHoverColors}
                    onChange={val => setAttributes({ btnHoverColors: val })}
                    defaults={{ color: '#4527a4', bg: '#4527a433' }}
                />

                <Notice status='premium' isIcon={true}>
                    {noticeMessage}
                </Notice>
            </PanelBody>
        </>
    )
}

export default Style;