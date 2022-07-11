import {
    ref
} from "vue";
import axios from "axios";

export const useFetch = (url, config = {}) => {
    const response = ref(null)
    const error = ref(null)
    const loading = ref(false)

    const fetch = async () => {
        loading.value = true;
        try {
            const result = await axios.request({
                url,
                ...config
            })
            response.value = result.data.data.slice(0, 1);
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    !config.skip && fetch();

    return {
        response,
        error,
        loading,
    };
};