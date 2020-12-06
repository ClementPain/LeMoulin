import dayjs from 'dayjs';

const formatDate = (dateAsString) => dayjs(dateAsString).format('MMM DD, YYYY - HH:mm');

const dateHandler = {
  formatDate,
};

export default dateHandler;