import { render, screen } from '@testing-library/react'
import mockResponse from '../../src/mock/getplayerachievements_response.json';
import Achievements from '../../src/components/stats/Achievements.jsx';

// Really tests Achievements and AchievementItem. I don't know if this matters (not having separate files explicitly testing both components),
// but with how Achievements works (just mapping achievements received as props to AchievementItems) this should get full coverage.
describe('group', () => {

    it('should render a list of achievements given an expected response', () => {
        render(<Achievements achievementsList={mockResponse} />)

        // For each response, assert that its data exists in the document
        mockResponse.forEach((achievement, index) => {
            // Image should have the right src
            expect(screen.getByRole('img', { name: achievement.name })).toHaveAttribute('src', achievement.icon);

            // Should have the right displayName, description, and date
            expect(screen.getByText(achievement.name)).toBeInTheDocument();
            expect(screen.getByText(achievement.description)).toBeInTheDocument();
            expect(screen.getAllByText(new Date(achievement.unlocktime * 1000).toDateString(), { exact: false }).length).toBeGreaterThan(0);
        })
    })

    /**
     * For now, logic handling the case of an empty achievements array in StatsCard prevents Achievements from rendering,
     * so this test case is not needed.
     */
    // it('should render nothing given an empty array', () => {
    //     const result = render(<Achievements achievementsList={[]} />)
    //     // Achievements renders a single child div, if achievements is empty, then that div should be empty
    //     expect(result.container.children[0]).toBeEmptyDOMElement();
    // })
})