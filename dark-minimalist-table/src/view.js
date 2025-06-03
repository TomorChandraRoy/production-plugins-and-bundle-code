import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import DarkMinimalistTable from './Components/Common/DarkMinimalistTable';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-bptb-dark-minimalist-table');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<div className="pTableDarkMinimalist">
				<DarkMinimalistTable {...{ attributes }} />
			</div>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});