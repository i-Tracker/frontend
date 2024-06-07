import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

export const setupChart = () => {
  Chart.register(...registerables, annotationPlugin);
};
