import { createRoot } from 'react-dom/client';
import config from '../config';
import { App } from './appComponent';
import './style.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>API_URL</th>
              <th>MODE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{config.API_BASE}</td>
              <td>{config.MODE}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        <h1 className="background">REACT TEMPLATE!</h1>
        <App />
      </div>
    </>
  );
}
