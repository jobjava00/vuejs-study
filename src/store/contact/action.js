import Constant from '@/common/constant';
import SearchApi from '@/api/SearchApi';

export default {
    [Constant.SEARCH_CONTACT]: (store, payload) => {
        SearchApi.searchContact(payload.name)
            .then((response) => store.commit(Constant.SEARCH_CONTACT, { contacts: response.data }))
    }
}