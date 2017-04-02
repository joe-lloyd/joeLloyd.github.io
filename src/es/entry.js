import '../sass/base.scss';
import CanvasModule from './modules/canvas-module';
import DataModule from './modules/data-module';

/**
 * @description
 * loads modules based on the availability of the elements
 *
 */
document.addEventListener("DOMContentLoaded", () => {
	new CanvasModule();
	new DataModule();
});
