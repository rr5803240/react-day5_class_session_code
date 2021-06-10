import { put , takeLatest, all } from 'redux-saga/effects';

// worker saga 
function* fetchLatestIndiaNews(){
    const records = yield fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=mentionyourapikeyfromnewsapi.org')
    .then(response => response.json());
    yield put({type:"INDIA_NEWS_RECEIVED", news : records})
}

function* fetchLatestUSNews(){
    const records = yield fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=mentionyourapikeyfromnewsapi.org')
    .then(response => response.json());
    yield put({type:"US_NEWS_RECEIVED", news : records})
}

// watcher saga
function* actionWatcher(){
    yield takeLatest('GET_INDIA_LATEST_NEWS', fetchLatestIndiaNews)
    yield takeLatest('GET_US_LATEST_NEWS', fetchLatestUSNews)
}

// root saga
export default function* rootSaga(){
    yield all([actionWatcher()])
}

