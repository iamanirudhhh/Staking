import Plans from '../components/Plans';
import { useNavigate} from 'react-router-dom';

export default function StartingPlan() {
    
    const navigate = useNavigate(); 

    const monthlyPlan = () => {
        navigate('/monthly-plan');
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
                        <Plans heading="Up To 20% APY" data="Simple Deposit Daily Return" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <Plans heading="Up To 60% APY" data="Simple Deposit Monthly Return" goToMonthlyPlan={monthlyPlan} />
                    </div>
                </div>
            </div>
        </div>
    );
}
