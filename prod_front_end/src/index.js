import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import ProdIndex from './components/prods_index';
import ProdNew from './components/prod_new';
import FileUpload from './components/file_upload';
import FileExport from './components/file_export';
import ProdDetail from './components/prod_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     <BrowserRouter>
        <Switch>
          <Route exact path="/prod/new" component={ProdNew} />
          <Route exact path="/upload" component={FileUpload} />
          <Route exact path="/fileexport" component={FileExport} />
          <Route path="/products/:desc/:datetime" component={ProdDetail}/>
          <Route exact path="/" component={ProdIndex} />
        </Switch>
     </BrowserRouter>
  </Provider>
  , document.querySelector('.content'));
