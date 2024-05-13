import { useNavigate} from 'react-router-dom';
import Plans from '../components/Plans';

export default function MonthlyPlan() {

    const navigate = useNavigate();

    const stakingPage = () => {
        navigate('/staking');
    }

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
                    
                <h2 style={{ marginBottom: 20 }}>MONTHLY PLANS</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <Plans heading="Up To 40% APY" data="0 - 100 Token" goToMonthlyPlan={stakingPage}/>
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <Plans heading="Up To 50% APY" data="101 - 500 Token" goToMonthlyPlan={stakingPage} />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <Plans heading="Up To 60% APY" data="501 - 1000 Token" goToMonthlyPlan={stakingPage} />
                    </div>
                </div>
            </div>
        </div>
    );
}
