export const printIcon = (size = 24) => <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 48 48'>
	<rect x='9' y='11' fill='#424242' width='30' height='3' />
	<path fill='#616161' d='M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z' />
	<path fill='#424242' d='M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z' />
	<circle fill='#00E676' cx='40' cy='18' r='1' />
	<rect x='11' y='4' fill='#90CAF9' width='26' height='10' />
	<path fill='#242424' d='M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z' />
	<rect x='11' y='31' fill='#90CAF9' width='26' height='11' />
	<rect x='11' y='29' fill='#42A5F5' width='26' height='2' />
	<rect fill='#1976D2' x='16' y='33' width='17' height='2' />
	<rect fill='#1976D2' x='16' y='37' width='13' height='2' />
</svg>;


export const printerIcons = {
	fcPrinter: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 48 48'>
		<rect x='9' y='11' fill='#424242' width='30' height='3' />
		<path fill='#616161' d='M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z' />
		<path fill='#424242' d='M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z' />
		<circle fill='#00E676' cx='40' cy='18' r='1' />
		<rect x='11' y='4' fill='#90CAF9' width='26' height='10' />
		<path fill='#242424' d='M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z' />
		<rect x='11' y='31' fill='#90CAF9' width='26' height='11' />
		<rect x='11' y='29' fill='#42A5F5' width='26' height='2' />
		<rect fill='#1976D2' x='16' y='33' width='17' height='2' />
		<rect fill='#1976D2' x='16' y='37' width='13' height='2' />
	</svg>,

	faPrinter: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512' fill='currentColor'>
		<path d='M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
	</svg>,

	fiPrinter: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='2' strokeLinejoin='round' stroke='currentColor' style={{ fill: 'none' }}>
		<polyline points='6 9 6 2 18 2 18 9' />
		<path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' />
		<rect x='6' y='14' width='12' height='8' />
	</svg>,

	aiFillPrinter: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 1024 1024' fill='currentColor'>
		<path d='M732 120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v148h440V120zm120 212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM664 844H360V568h304v276zm164-360c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z' />
	</svg>,

	aiOutlinePrinter: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 1024 1024' fill='currentColor'>
		<path d='M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z' />
	</svg>,

	aiTwotonePrinter: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 1024 1024' fill='currentColor'>
		<path d='M360 180h304v152H360zm492 220H172c-6.6 0-12 5.4-12 12v292h132V500h440v204h132V412c0-6.6-5.4-12-12-12zm-24 84c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z' />
		<path d='M852 332H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z' />
		<path d='M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8z' />
	</svg>,

	biPrinter: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' fill='currentColor'>
		<path d='M19,7h-1V2H6v5H5c-1.654,0-3,1.346-3,3v7c0,1.103,0.897,2,2,2h2v3h12v-3h2c1.103,0,2-0.897,2-2v-7C22,8.346,20.654,7,19,7 z M8,4h8v3H8V4z M16,20H8v-4h8V20z M20,17h-2v-1v-2H6v2v1H4v-7c0-0.551,0.449-1,1-1h14c0.552,0,1,0.449,1,1V17z' />
		<path d='M14 10H18V12H14z' />
	</svg>
}