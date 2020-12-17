import dayjs from 'dayjs';

const formatDate = (dateAsString) => dayjs(dateAsString).format('DD MMM YYYY');

const dateHandler = {
  formatDate,
};

export default dateHandler;
