import { __ } from '@wordpress/i18n';
import { withSelect } from "@wordpress/data";
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs, toolTipPresets } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { AdvertiseCard } from "../../../../../bpl-tools/ProControls";
import BlockPreview from './panel/BlockPreview';
import { variantSwitch } from '../../../utils/functions';
import { tabController } from '../../../../../bpl-tools/utils/functions';


const Settings = ({ attributes, setAttributes, isPremium, siteURL }) => {
	const { alignment, buttonVariant = 'default' } = attributes || {};

	const pricingURL = `${siteURL}/wp-admin/edit.php?post_type=print_page&page=ppb_demo_page#pricing`;

	return <>
		<InspectorControls>
			<TabPanel onSelect={tabController} className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} >
				{tab => <>
					{'general' === tab.name && <General {...{ attributes, setAttributes, pricingURL }} />}
					{'style' === tab.name && <Style {...{ attributes, setAttributes }} />}
				</>
				}</TabPanel>

			<AdvertiseCard planLink={pricingURL || 'https://bplugins.com/products/print-page/pricing'} />

		</InspectorControls>


		<BlockControls>
			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Print Button Alignment')} alignmentControls={[
				{ title: __('Print Button in left', 'print-page'), align: 'left', icon: 'align-left' },
				{ title: __('Print Button in center', 'print-page'), align: 'center', icon: 'align-center' },
				{ title: __('Print Button in right', 'print-page'), align: 'right', icon: 'align-right' }
			]} />

			<BlockPreview
				options={toolTipPresets}
				isPremium={isPremium}
				value={buttonVariant}
				onChange={(val) => setAttributes(variantSwitch(val, attributes))}
			/>

		</BlockControls>

	</>;
};


export default withSelect((select) => {
	const { getSite } = select("core");

	return {
		siteURL: getSite()?.url || ""
	};
})(Settings);