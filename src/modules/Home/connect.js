import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"; // Correct the path
import { selectPocemonList, fetchPocemonList } from "../../app/slices/homeSlices"; // Correct the path

const useConnect = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selectPocemonList);

    useEffect(() => {
        dispatch(fetchPocemonList());
    }, [dispatch]);

    return { data };
};

export default useConnect;
