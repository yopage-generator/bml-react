import { connect } from 'react-redux';
import BackgroundForm from './BackgroundForm';

import { saveImage } from 'actions/landingVersions';

const mapStateToProps = state => state;

const actions = {
  onSaveBackground: saveImage,
};

export default connect(mapStateToProps, actions)(BackgroundForm);
