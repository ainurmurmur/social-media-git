export const updateObjectArray =(items, objPropName, itemId, newObjectProps) => {

    return items.map( u => {
            if (u[objPropName] === itemId) { 
                return { ...u, ...newObjectProps }
            }
            return u;
        }
    )}
