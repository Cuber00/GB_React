import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const Message = (props) => {
  const { text, type } = props;
  switch (type) {
    case 'post_msg':
      return <div className={cl.root + ' ' + cl.post_msg}>{text}</div>;
    case 'get_msg':
      return <div className={cl.root + ' ' + cl.get_msg}>{text}</div>;
    default:
      return 'Ошибка типа сообшения';
  }
};

Message.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['post_msg', 'get_msg']),
};
Message.defaultProps = {
  text: '',
  type: 'post_msg',
};
