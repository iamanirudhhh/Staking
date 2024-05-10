import Plans from '../components/Plans';

export default function StartingPlan() {
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
                        <Plans heading="Up To 60% APY" data="Simple Deposit Monthly Return" />
                    </div>
                </div>
            </div>
        </div>
    );
}
