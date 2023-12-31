import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import {clearNotification} from "../reducers/notificationReducer";


const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.notification);

  useEffect(() => {

    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [dispatch, notification]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (!notification) {
    return null
  }
  return (
      <div style={style}>
        {notification}
      </div>
  )
}

export default Notification
