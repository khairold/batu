import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import Urls from '../components/Urls'
import * as CounterActions from '../actions/counter'
import * as UrlsActions from '../actions/urls'

function mapStateToProps(state) {
  return {
    counter: state.counter,
    urls: state.urls
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UrlsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Urls)
