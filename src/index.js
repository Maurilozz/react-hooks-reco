import { useState, useEffect } from "react";

const useForm = (initialForm = {}) => {
    if (!Object.keys(initialForm).length) {
        throw TypeError('El argumento debe contener al menos un valor');
    }

    const [formState, setformState] = useState(initialForm);

    const handleForm = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        })
    }

    return [formState, handleForm]
}

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFecth = async () => {
        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFecth();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

module.exports = {
    useForm, useFetch
}