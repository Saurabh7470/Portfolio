export const ApiMethodsGet = (req) => {
    fetch(req)
    .then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        console.log(err);
    });
};
