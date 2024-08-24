import { Routes, Route } from 'react-router-dom';
import NotFound from '../screens/NotFount';

interface Props {
    children: React.ReactNode
}

const RoutesWithNotFound = ({children}: Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesWithNotFound;