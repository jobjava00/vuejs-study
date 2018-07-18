import axios from 'axios';
import Constant from '@/common/constant';

export default {
    searchContact: (name) => axios.get(Constant.BASE_URL + name)
}