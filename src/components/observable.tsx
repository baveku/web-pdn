import { useObserver } from 'mobx-react-lite'
import React from 'react'
const ObservableO: React.FC = props => useObserver(() => <>{props.children}</>)
export default ObservableO