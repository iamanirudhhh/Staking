import { useNavigate} from 'react-router-dom';
import Plans from '../components/Plans';

export default function StartingPlan() {
    
    const navigate = useNavigate(); 

    const monthlyPlan = () => {
        navigate('/monthly-plan');
    };

    const dailyPlan = () => {
        navigate('/staking');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
            }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
                }}>
                <h2 style={{ marginBottom: 20 }}>REWARDS SYSTEM</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <Plans heading="Up To 36% APY" data="Simple Deposit Daily Return" goToMonthlyPlan={dailyPlan}/>
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <Plans heading="Up To 70% APY" data="Simple Deposit Monthly Return" goToMonthlyPlan={monthlyPlan} />
                    </div>
                </div>
            </div>
        </div>
    );
}
