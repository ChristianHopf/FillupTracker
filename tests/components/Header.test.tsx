import { render, screen } from '@testing-library/react'
import Header from '../../src/components/header/Header.jsx'

describe('Header', () => {
    it('should render', () => {
        render(<Header name={"xman720"} imgUrl={"https://avatars.steamstatic.com/5af6623ce2a9d41363a12605d9d015febafa30ad_medium.jpg"} />);

        const nameHeading = screen.getByRole('heading')
        expect(nameHeading).toBeInTheDocument();
        expect(nameHeading).toHaveTextContent(/xman720/i);
    })
})