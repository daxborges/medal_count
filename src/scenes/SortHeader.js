import { connect } from 'react-redux';
import { changeSort } from '../services/sorting/actionCreators';
import SortOptions from '../components/SortOptions';


/**
 * Map state to properties for CountriesList
 */
const mapStateToProps = (state) => ({
  sortBy: state.sortBy
});

const mapDispatchToProps = {
  changeSort
};

const SortHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortOptions);

export default SortHeader;