import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const PrintButtonText  = ({ attributes, setAttributes }) => {
    const { btnText } = attributes || {};
    return (
        <RichText
            tagName='span'
            className='text'
            value={btnText}
            onChange={val => setAttributes({ btnText: val })}
            placeholder={__('Button Text', 'print-page')}
            inlineToolbar
        />
    )
}

export default PrintButtonText ;