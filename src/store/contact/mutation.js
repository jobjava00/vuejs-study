import Constant from '@/common/constant';

export default {
    [Constant.SEARCH_CONTACT]: (state, payload) => {
        state.contacts = payload.contacts;
    }
}