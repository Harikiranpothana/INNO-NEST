// All product claims live here so they can be audited and edited in one place.
// Source: INNO-NEST project presentation + the prototype SMS screenshot.
//
// status:
//   'demonstrated' – visible in the prototype SMS screenshot
//   'design'       – stated in the project documentation; verification pending
//   'planned'      – part of the product concept, not yet shown
//   'unmeasured'   – a potential benefit that has not been measured

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Problem', to: '/#problem' },
  { label: 'AREATOR', to: '/#areator' },
  { label: 'Compare', to: '/#compare' },
  { label: 'Value', to: '/#value' },
];

export const PARAMETERS = [
  { icon: 'Thermometer', title: 'Temperature fluctuations', text: 'Influence fish metabolism and water chemistry.' },
  { icon: 'FlaskConical', title: 'pH variations', text: 'Can create unsuitable conditions for aquatic organisms.' },
  { icon: 'Waves', title: 'Turbidity', text: 'High turbidity can indicate excess suspended matter and reduces water clarity and light penetration.' },
  { icon: 'Wind', title: 'Dissolved oxygen', text: 'Fluctuations can directly affect fish respiration and survival.' },
  { icon: 'Clock', title: 'Periodic manual testing', text: 'Gives only a snapshot of pond conditions, so rapid changes between inspections can be missed.' },
];

export const GAP_STAGES = ['Safe condition', 'Water-quality deterioration', 'Fish stress', 'Critical condition'];

export const EXISTING = [
  {
    title: 'Manual water-quality monitoring',
    text: 'Farmers collect water samples and measure parameters such as pH, dissolved oxygen, temperature and turbidity with testing kits or laboratory methods. It is simple, but time-consuming, and it cannot continuously capture rapid changes.',
    limits: [
      'Requires periodic manual effort',
      'Provides intermittent readings',
      'May delay detection of sudden changes',
      'Depends on someone checking and interpreting the results',
    ],
  },
  {
    title: 'Conventional sensor-based monitoring',
    text: 'Electronic sensors measure water parameters at regular intervals and display or record the readings. This reduces manual effort, but abnormal conditions may still need human interpretation and intervention.',
    limits: [
      'Dependence on human interpretation',
      'Limited automatic response to abnormal conditions',
      'Internet or cloud connectivity needed in some implementations',
      'Multiple separate devices or added complexity',
      'Higher cost or complexity for some small-scale farms',
    ],
  },
];

export const WORKFLOW = [
  { icon: 'Activity', title: 'Monitor', text: 'Sensors collect water-quality readings from the pond.' },
  { icon: 'Cpu', title: 'Analyze', text: 'A controller checks the readings against predefined limits.' },
  { icon: 'MessageSquareText', title: 'Alert', text: 'The farmer is told about abnormal conditions by SMS.' },
  { icon: 'Fan', title: 'Respond', text: 'Aeration responds according to its configured control logic, and farmers can send supported SMS commands.' },
  { icon: 'ShieldCheck', title: 'Protect', text: 'Sensor or communication faults are identified and reported where fault detection is implemented.' },
];

export const STATUS = {
  demonstrated: { label: 'Shown in prototype', hint: 'Visible in prototype test messages.' },
  design: { label: 'Design objective', hint: 'Described in project documentation; verification pending.' },
  planned: { label: 'Planned', hint: 'Part of the product concept; not yet shown.' },
  unmeasured: { label: 'Not yet measured', hint: 'A potential benefit that has not been validated.' },
};

export const FEATURE_GROUPS = [
  {
    icon: 'Gauge',
    title: 'Water-quality monitoring',
    items: [
      { text: 'Temperature monitoring', status: 'demonstrated' },
      { text: 'pH monitoring', status: 'demonstrated' },
      { text: 'Turbidity monitoring', status: 'demonstrated' },
      { text: 'Dissolved oxygen monitoring, where supported by the final implementation', status: 'planned' },
    ],
  },
  {
    icon: 'Brain',
    title: 'Intelligent monitoring',
    items: [
      { text: 'Identifies readings outside predefined limits', status: 'demonstrated' },
      { text: 'Interprets readings and suggests relevant actions', status: 'demonstrated' },
    ],
  },
  {
    icon: 'Smartphone',
    title: 'SMS communication',
    items: [
      { text: 'Sends readings to a registered mobile number', status: 'demonstrated' },
      { text: 'Sends insights and suggestions with the readings', status: 'demonstrated' },
      { text: 'Sends instant alerts when a parameter crosses its limit', status: 'design' },
    ],
  },
  {
    icon: 'Fan',
    title: 'Aerator control',
    items: [
      { text: 'Supported SMS commands turn the aerator motors on or off', status: 'demonstrated' },
      { text: 'Automated aeration response based on configured monitoring and control logic', status: 'design' },
    ],
  },
  {
    icon: 'TriangleAlert',
    title: 'Fault detection',
    items: [
      { text: 'Identifies sensor malfunctions where implemented', status: 'design' },
      { text: 'Warns the farmer when a supported sensor fault is detected', status: 'design' },
    ],
  },
  {
    icon: 'WifiOff',
    title: 'Rural usability',
    items: [
      { text: 'SMS-based remote monitoring and alerts, with less reliance on continuous internet access', status: 'demonstrated' },
      { text: 'A low-cost, farmer-friendly approach', status: 'design' },
    ],
  },
];

// Comparison: AREATOR column is limited to what the project documentation supports.
export const COMPARISON = [
  { criterion: 'Water-quality readings', manual: 'Periodic manual checks', sensor: 'Depends on the system', areator: 'Sensor-based monitoring' },
  { criterion: 'Continuous observation', manual: 'Limited by inspection frequency', sensor: 'Depends on implementation', areator: 'Designed for ongoing monitoring' },
  { criterion: 'Abnormal-condition detection', manual: 'Requires manual interpretation', sensor: 'Depends on implementation', areator: 'Predefined-limit detection' },
  { criterion: 'Remote SMS alerts', manual: 'Not inherent to manual testing', sensor: 'Depends on implementation', areator: 'Supported system feature' },
  { criterion: 'SMS-based aerator control', manual: 'Not inherent to manual testing', sensor: 'Depends on implementation', areator: 'Supported control feature' },
  { criterion: 'Sensor-fault warnings', manual: 'Requires manual identification', sensor: 'Depends on implementation', areator: 'Designed to identify supported sensor faults' },
  { criterion: 'Automatic aeration response', manual: 'Requires manual action unless separately automated', sensor: 'Depends on implementation', areator: 'Proposed integrated capability' },
  { criterion: 'Internet dependence', manual: 'Depends on the testing process', sensor: 'Varies by system', areator: 'Designed for SMS-based operation in low-connectivity areas' },
  { criterion: 'Multi-pond management', manual: 'Requires separate tracking', sensor: 'Depends on the system', areator: 'Scalability is a stated product objective' },
  { criterion: 'Cost', manual: 'Depends on labor and testing methods', sensor: 'Varies by equipment', areator: 'Intended as a low-cost solution; final cost to be confirmed' },
];

export const VALUE = [
  { icon: 'Route', title: 'Fewer manual pond inspections', text: 'Remote access to water-quality readings can reduce the need to visit a pond only to check its condition.' },
  { icon: 'Timer', title: 'Earlier awareness of change', text: 'Ongoing monitoring can reveal changes between routine inspections and give farmers more time to respond.' },
  { icon: 'MessageSquareText', title: 'Remote communication', text: 'SMS alerts can carry abnormal readings and relevant system events to registered users.' },
  { icon: 'Link2', title: 'Monitoring and aeration together', text: 'The system combines water-quality monitoring and aeration control instead of treating them as separate jobs.' },
  {
    icon: 'Zap',
    title: 'Potential energy optimization',
    text: 'Condition-aware aeration creates an opportunity to cut unnecessary motor runtime. Energy savings have not yet been measured or validated.',
    status: 'unmeasured',
  },
  {
    icon: 'Layers',
    title: 'Scalability',
    text: 'The concept aims to support monitoring of multiple ponds and aerators through a suitable monitoring platform. That platform is a product objective, not yet a verified, operating feature.',
    status: 'planned',
  },
];

export const INQUIRY_TYPES = [
  { value: 'Purchase', icon: 'ShoppingBag', text: 'Ask about buying AREATOR for your farm.' },
  { value: 'Collaboration', icon: 'Handshake', text: 'Work with us on research, pilots or development.' },
  { value: 'Partnership', icon: 'Link2', text: 'Distribution, investment or industry partnerships.' },
  { value: 'General Inquiry', icon: 'MessageCircle', text: 'Anything else about INNO-NEST or AREATOR.' },
];
