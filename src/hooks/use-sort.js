import {useState} from "react";

function useSort(config, data) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    let sortedData = data

    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reversOrder = sortOrder === 'asc' ? 1 : -1;
            return typeof valueA === 'string'
                ? valueA.localeCompare(valueB) * reversOrder
                : (valueA - valueB) * reversOrder
        })
    }

    return {
        sortedData,
        sortOrder,
        sortBy,
        setSortColumn
    }
}

export default useSort;
