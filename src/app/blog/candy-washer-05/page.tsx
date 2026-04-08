export const metadata = {
  title: 'Candy Washer Error Code 05 - Temperature Sensor Fix',
  description: 'Candy washing machine showing error 05? Temperature sensor fault fix guide with causes and solutions.',
}

export default function CandyWasher05Page() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Candy Washer Error Code 05: Complete Fix Guide</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}>
        Your Candy washing machine displaying error code 05? This guide covers every possible cause and the exact steps to fix the temperature sensor issue. Whether you're seeing 05, E05, or error 5, you'll find the solution here.
      </p>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}>What Does Candy Washer Error 05 Mean?</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
          Error code 05 on Candy washing machines indicates a <strong style={{color: '#fff'}}>temperature sensor fault</strong>. The NTC (Negative Temperature Coefficient) thermistor is either reading incorrectly or has failed entirely. This sensor monitors water temperature and tells the control board when to heat the water.
        </p>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', marginTop: '15px' }}>
          <strong style={{color: '#f59e0b'}}>Note:</strong> On some Candy models, this may appear as <strong style={{color: '#fff'}}>E05</strong>, <strong style={{color: '#fff'}}>Error 5</strong>, or <strong style={{color: '#fff'}}>F05</strong>. All variations indicate the same temperature sensor problem.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Common Causes of Error 05</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <ul style={{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}>
            <li><strong style={{color: '#fff'}}>Faulty NTC thermistor:</strong> The temperature sensor has failed or is giving incorrect readings.</li>
            <li><strong style={{color: '#fff'}}>Loose wiring connection:</strong> The connector to the sensor is loose, corroded, or damaged.</li>
            <li><strong style={{color: '#fff'}}>Broken wiring harness:</strong> Wires between the sensor and control board are damaged.</li>
            <li><strong style={{color: '#fff'}}>Control board failure:</strong> Rare, but the main board may not be processing the signal correctly.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>How to Fix Error 05: Step-by-Step</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          
          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 1: Reset the Washing Machine</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>A simple reset can sometimes clear the error if it's a temporary glitch.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Turn off the washing machine at the power button</li>
                <li>Unplug it from the electrical outlet</li>
                <li>Wait for exactly 2 minutes</li>
                <li>Plug back in and turn on</li>
                <li>Try running a cold wash cycle</li>
                <li>If error 05 returns, proceed to Step 2</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 2: Locate the Temperature Sensor (NTC)</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>The NTC sensor is usually found on the heating element assembly or near the water inlet.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Turn off and unplug the washing machine</li>
                <li>Remove the back panel or service panel</li>
                <li>The NTC is a small probe attached to the heating element housing</li>
                <li>It's a 2-wire component, usually with a blue or black connector</li>
                <li>Take a photo before disconnecting anything</li>
              </ol>
            </div>
          </div>

          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 3: Test the Temperature Sensor</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Use a multimeter to check if the NTC is functioning correctly.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Set your multimeter to the <strong>Ohms (Ω)</strong> setting</li>
                <li>Disconnect the NTC from its wiring harness</li>
                <li>Place the meter probes on the two NTC terminals</li>
                <li>At room temperature (approximately 20°C / 68°F), it should read <strong>10,000 to 20,000 ohms</strong></li>
                <li>If reading is 0, infinite, or way outside this range, the sensor is faulty</li>
                <li>For more accuracy, test at different water temperatures—the resistance should change</li>
              </ol>
              <p style={{ color: '#f59e0b', marginTop: '10px' }}>💡 The resistance should decrease as temperature increases.</p>
            </div>
          </div>

          <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 4: Inspect Wiring and Connectors</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>Sometimes the issue is with the wiring, not the sensor itself.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Inspect the connector going to the NTC</li>
                <li>Look for signs of corrosion, melting, or looseness</li>
                <li>Check the full length of wiring to the control board</li>
                <li>Look for any exposed or broken wires</li>
                <li>Reconnect firmly if loose; repair or replace damaged wires</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: '600', color: '#6366f1', marginBottom: '10px' }}>Step 5: Replace the Temperature Sensor</h3>
            <p style={{ color: '#94a3b8', marginBottom: '10px' }}>If testing confirms the NTC is faulty, replace it with the correct part.</p>
            <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
              <ol style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Order a replacement NTC thermistor specific to your Candy model</li>
                <li>Disconnect the faulty NTC from its connector</li>
                <li>Remove the mounting screw or clip</li>
                <li>Install the new sensor in the exact same position</li>
                <li>Reconnect the wiring harness firmly</li>
                <li>Reassemble the machine and test with a wash cycle</li>
              </ol>
            </div>
          </div>

        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Parts and Tools Needed</h2>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <table style={{ width: '100%' }}>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>NTC Temperature Sensor</td><td style={{ padding: '10px', color: '#22c55e' }}>$15-30</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Multimeter</td><td style={{ padding: '10px', color: '#22c55e' }}>$20-50</td></tr>
            <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '10px', color: '#94a3b8' }}>Wiring connectors</td><td style={{ padding: '10px', color: '#22c55e' }}>$5-10</td></tr>
            <tr><td style={{ padding: '10px', color: '#94a3b8' }}>Appliance repair labor</td><td style={{ padding: '10px', color: '#22c55e' }}>$80-150/hr</td></tr>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Compatible Candy Washer Models</h2>
        <p style={{ color: '#94a3b8' }}>This fix applies to all Candy washing machines including: Aquaviva, Aquamatic, Grand Evo, Grand Vita, Inspire, Report, ROYAL, ROYA, CSW, CS, CT, CTD, CST, and all Candy Aquasteam, Aqualtis, and CSTG series models.</p>
      </section>

      <section style={{ marginBottom: '30px', background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>Conclusion</h2>
        <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          Error code 05 on your Candy washing machine is most commonly caused by a faulty NTC temperature sensor. By following the troubleshooting steps in this guide—starting with a simple reset and progressing to multimeter testing—you can identify whether it's a wiring issue or a failed sensor.
        </p>
        <p style={{ color: '#94a3b8', lineHeight: '1.8', marginTop: '15px' }}>
          Replacing the NTC is a straightforward repair that most DIYers can complete in under an hour. If you're not comfortable testing electrical components, contact a qualified appliance repair technician.
        </p>
      </section>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ background: '#f59e0b', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏺ Medium DIY</span>
        <span style={{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}>⏱️ 30-60 Minutes</span>
      </div>
    </div>
  )
}