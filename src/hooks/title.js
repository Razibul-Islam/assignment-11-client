const { useEffect } = require("react")
const useTitle = title => {
    useEffect(()=> {
    document.title = `${title} -Wedding-shots`;
}, [title])
}
export default useTitle;