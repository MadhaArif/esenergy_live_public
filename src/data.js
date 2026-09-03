// ES Energy - Skeleton Mock Data (Flexible and Scalable Structure)

import { contactConfig as sharedContactConfig, getWhatsAppNumber } from './lib/contact';

export const statsData = [
  { id: "stat-1", label: "Tons of CO2 Saved", value: "Assessed per project" },
  { id: "stat-2", label: "Megawatts Installed", value: "Sized to site demand" },
  { id: "stat-3", label: "Satisfied Customers", value: "Residential & corporate" },
  { id: "stat-4", label: "Operations Model", value: "Engineering-led" },
];

export const brandIntroData = {
  title: "Empowering Pakistan with Clean, Reliable Energy",
  subtitle: "ES Energy is committed to delivering state-of-the-art solar energy solutions customized for residential, commercial, and industrial scales.",
  description: "Our engineered solar energy frameworks ensure optimal performance, grid reliability, and maximum savings. We utilize advanced tier-1 technologies to provide high-yield sustainable energy systems designed to withstand local environmental conditions.",
  ctaText: "Discover Our Vision",
};

export const whyChooseUsData = [
  {
    id: "wcu-1",
    title: "Engineered Solutions",
    description: "Every system is designed around the site, load profile, energy requirements, and operating conditions — from initial assessment through final commissioning.",
  },
  {
    id: "wcu-2",
    title: "Tier-1 Components",
    description: "We source proven solar panels, inverters, batteries, and electrical components from established manufacturers to build dependable long-term systems.",
  },
  {
    id: "wcu-3",
    title: "Real-Time Monitoring",
    description: "System performance can be monitored continuously, providing visibility into energy generation, consumption, system health, and operational performance.",
  },
  {
    id: "wcu-4",
    title: "End-to-End Support",
    description: "From system design and feasibility assessment to installation, commissioning, documentation, and after-sales support, we stay involved throughout the project lifecycle.",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Site Feasibility Study & Consultation",
    description: "Detailed analysis of roof structures, load patterns, electricity bills, and shading factors.",
  },
  {
    step: "02",
    title: "Custom System Engineering",
    description: "Creating precise 3D layouts, selecting compatible components, and defining expected energy output.",
  },
  {
    step: "03",
    title: "Net Metering & Permitting",
    description: "Handling regulatory documentation, DISCO coordination, and compliance approvals.",
  },
  {
    step: "04",
    title: "Professional Installation & Onboarding",
    description: "Deploying the system safely, testing protection equipment, configuring smart monitoring, and completing system startup.",
  },
];

export const impactStats = [
  {
    id: "imp-1",
    serial: "01",
    title: "ENERGY COST SAVINGS",
    description: "Solar generation can offset a meaningful portion of daytime grid consumption, depending on system capacity, load profile, and local electricity tariffs.",
  },
  {
    id: "imp-2",
    serial: "02",
    title: "LONG-TERM VALUE",
    description: "System economics depend on installation cost, energy yield, electricity tariffs, financing, and ongoing operating conditions. We focus on project-specific paybacks rather than generalized estimates.",
  },
  {
    id: "imp-3",
    serial: "03",
    title: "LOWER EMISSIONS",
    description: "On-site solar generation can reduce reliance on conventional grid electricity and therefore help lower the associated carbon footprint. Actual impact varies by energy mix and system generation.",
  },
];

export const solutionCategories = [
  { id: "all", name: "All Solutions", slug: "all" },
  { id: "solar-inverters", name: "Solar Inverters", slug: "solar-inverters" },
  { id: "solar-panels", name: "Solar Panels", slug: "solar-panels" },
  { id: "lithium-batteries", name: "Lithium Batteries", slug: "lithium-batteries" },
  { id: "vfd-inverters", name: "VFD Inverters", slug: "vfd-inverters" },
];

export const productsData = [
  {
    "id": "dyness-dl5c-pro",
    "category": "lithium-batteries",
    "brand": "Dyness",
    "name": "Dyness DL5.0C Pro 51.2v 100A Lithium Battery",
    "title": "Dyness DL5.0C Pro 51.2v 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 235000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/5-kW100AIP20.png?v=1786027029",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100Ah",
      "Long lifespan supporting over ≥8000 Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Dyness DL5.0C Pro - 51.2V 100Ah 5.12kWh LiFePO4 Lithium Battery (IP20, 8000 Cycles) DL5.0C Pro is suitable for residential and small commercial/industrial scenarios, with up to 50 units in parallel and an energy range from 5.12 kWh to 256 kWh. High cycle life and built-in safety",
    "technicalDetails": {
      "overview": {
        "Brand": "Dyness",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4",
        "Nominal Energy": "5.12kWh",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "100Ah",
        "Cycle Life": "≥8000 Cycles",
        "Depth of Discharge": "95%"
      },
      "batteryManagement": {
        "Communication": "CAN / RS485"
      },
      "general": {
        "IP Rating": "IP20",
        "Dimensions": "488 / 515 / 150 mm",
        "Weight": "46kg"
      }
    }
  },
  {
    "id": "knox-xerox-25kw-g4-pro-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Xerox 25.2KW G4 Pro OnGrid Solar Inverter",
    "title": "Knox Xerox 25.2KW G4 Pro OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "25.2 kW",
    "price": 275000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_3_d1a97524-51f3-4f6f-bdf2-5b44f0747ad5.png?v=1752477134",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "25.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 25.2 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox Xerox G4 Pro 25.2kW On-Grid Solar Inverter Overview A high-performance on-grid solar inverter from Knox, designed for decentralized residential, commercial, and industrial systems . Known for easy installation, reliability , and low maintenance . Reliability Certified to IP66 standards (dustproof &amp; waterproof) Built-in protections: DC reverse polarity , residual current monitoring , surge protection Robust build for long-term performance in tough environments Powerful 40A max DC input with wide MPP voltage range Supports 150% PV array oversizing Suitable for bi-facial and large-area solar panels Ideal for varied installations — rooftops, small commercial zones, etc. Easy to Install Supports Plug &amp; Play and 4G dongles Compatible with Phoenix Contact DC connectors Real-time monitoring via Solplanet mobile app Wall-mountable , sleek, and compact Max input current per string: 40/32",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "25.2 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "25.2 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "knox-10kw-g2-ip65-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox 10.2KW G4 Pro IP66 OnGrid Solar Inverter",
    "title": "Knox 10.2KW G4 Pro IP66 OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10.2 kW",
    "price": 170000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_57dc7acf-0caf-48df-afb7-9d835db5075b.png?v=1752474354",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Maximum efficiency of 98.4%.",
      "Advanced safety with built-in surge protection and replaceable Type-II SPD.",
      "Ideal for bifacial and large-area PV modules (26A input current per string).",
      "Clear installation guide with step-by-step wiring diagrams.",
      "Wall-mounting hardware included for quick setup.",
      "Real-time performance data accessible through a user-friendly app."
    ],
    "detailedDescription": "Knox ASW 10.2K LT-G4 Pro On-Grid Inverter The Knox ASW 10.2K LT-G4 Pro is a high-performance on-grid inverter engineered for residential and commercial solar applications. It offers advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "10.2 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10.2 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Monitoring": "Remote monitoring via Wi-Fi and RS485 interfaces.",
        "Warranty": "Backed by a 6-year warranty, ensuring peace of mind."
      }
    }
  },
  {
    "id": "knox-zynex-seres-8kw-ip66-hybrid-solar-inverter-1",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Zynex Series 10KW IP66 Hybrid Solar Inverter",
    "title": "Knox Zynex Series 10KW IP66 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "10 kW",
    "price": 355000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_2_0ed3843a-61d1-4b01-895f-14f0c82a194c.png?v=1758978389",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Zynex Series 10kW Hybrid Inverter (ZX-3M-1020)",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "knox-zynex-seres-8kw-ip66-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Zynex Series 8KW IP66 Hybrid Solar Inverter",
    "title": "Knox Zynex Series 8KW IP66 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "8 kW",
    "price": 310000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_1_f6394951-702f-4a0f-9868-7e95f27d52e8.png?v=1758977443",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "8 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 8 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Zynex Series 8kW Hybrid Inverter (ZX-3M-0816)",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "8 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "8 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "pylontech-fidus-5kw-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Pylontech",
    "name": "PylonTech Fidus 5kW 100A Lithium Battery",
    "title": "PylonTech Fidus 5kW 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 255000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/5kW100AIP65.png?v=1776582231",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "10°C to +55°C",
      "20°C to +60°C",
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Fidus Battery – EU Series (Advanced Low-Voltage Energy Storage System) Overview The Fidus Battery is a high-performance LiFePO4 (LFP) energy storage solution designed for residential and commercial applications. It delivers high discharge rates, extreme durability, and flexible scalability , making it ideal for harsh environments and large-scale solar systems.",
    "technicalDetails": {
      "overview": {
        "Brand": "Pylontech",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "crown-electra-boost-5kw-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Crown",
    "name": "Crown Electra Boost 5kW 100A Lithium Battery",
    "title": "Crown Electra Boost 5kW 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 220000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP2051.2v100A.png?v=1779109756",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "The Crown Electra Boost 5kW 100A Lithium Battery is an advanced LiFePO4 battery pack engineered by Crown, offering 5 kW capacity at 48V DC nominal voltage. Its Grade-A prismatic cells are rated for 6000+ Cycles of lifecycle longevity. It features built-in BMS safety monitoring and supports parallel installation for scalable solar energy storage backup.",
    "technicalDetails": {
      "overview": {
        "Brand": "Crown",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "knox-powerbase-32kw-51-2v-628a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Powerbase 32kW 51.2v 628A Lithium battery",
    "title": "Knox Powerbase 32kW 51.2v 628A Lithium battery",
    "model": "Lithium battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "32 kW",
    "price": 1099000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/32kW628AIP65_2.png?v=1784728066",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "32 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "Brand new cells with built-in cell balancing for consistent performance",
      "Built to last, with a 5-year manufacturer warranty",
      "Guards against overcharge, over-discharge, overheating, low temperature, overcurrent, and short circuits",
      "Low power consumption, high brightness, and clear visibility from a distance",
      "Connect up to 8 units together for expanded capacity",
      "Durable design with excellent heat dissipation for added safety"
    ],
    "detailedDescription": "Powerbase 32 - 51.2V 628Ah LiFePO4 Battery Overview The Powerbase 32 is a high-capacity Lithium Iron Phosphate (LiFePO4) battery built for reliable, long-term energy storage. With a 628Ah capacity and A-grade brand new prismatic LFP cells, it delivers safe, stable power backed by an intelligent BMS and an easy-to-read touchscreen display.",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "Lithium battery",
        "Battery Type": "LiFePO4 (LFP)",
        "Nominal Energy": "32 kW",
        "Nominal Voltage": "51.2 V"
      },
      "electrical": {
        "Nominal Capacity": "628 Ah",
        "Recommended Discharge Current": "300 A",
        "Cycle Life": "8000+ cycles"
      },
      "batteryManagement": {
        "Communication": "RS485, RS232, CAN"
      },
      "general": {
        "Storage Temperature": "-5°C ~ 0°C / 35°C ~ 45°C (up to 2 months); 5°C ~ 35°C (up to 3 months, optimum); 15°C ~ 35°C (up to 6 months)",
        "IP Rating": "IP20",
        "Dimensions": "760 x 400 x 760 mm",
        "Weight": "248 kg",
        "Warranty": "5 years"
      }
    }
  },
  {
    "id": "fronus-6kw-pv6000-with-netmetering-battery-less-solar-inverter",
    "category": "lithium-batteries",
    "brand": "Fronus",
    "name": "Fronus Meta 6KW PV9000 With Netmetering Battery Less Solar Inverter",
    "title": "Fronus Meta 6KW PV9000 With Netmetering Battery Less Solar Inverter",
    "model": "Solar Inverter",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "6 kW",
    "price": 36500,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Fronus6KWPV6000WithNetmeteringOffGridSolarInverter.png?v=1754204638",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "6 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "10°C to 50°C",
      "15°C to 60°C",
      "High energy capacity rating of 6 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Fronus META-6KW PV Inverter (Single Phase) Technical",
    "technicalDetails": {
      "overview": {
        "Brand": "Fronus",
        "Model": "Solar Inverter",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "6 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "6 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "volnex-alpha-2-56-2-5kw-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Volnex",
    "name": "Volnex Alpha 2.56 (2.5kW) 100A Lithium Battery",
    "title": "Volnex Alpha 2.56 (2.5kW) 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "2.5 kW",
    "price": 135000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-2025.6v100A.png?v=1781783666",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "2.5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "LCD Display",
      "LED Indicators",
      "SOC Indicator",
      "High energy capacity rating of 2.5 kW",
      "Long lifespan supporting over 6000 Cycles lifecycles",
      "Stable nominal DC voltage output of 25.6V"
    ],
    "detailedDescription": "Alpha 2.56 (2.56kWh): Battery Model: Alpha 2.56 Battery Type: LiFePO4 (LFP) Usable Energy: 2560Wh (2.56kWh) Nominal Voltage: 25.6V Operating Voltage: 22.4V – 28.08V Max Charge/Discharge Current: 100A Communication CAN RS485 RS232 Wi-Fi Display LCD Display LED Indicators SOC Indicator Physical Dimensions: 360 × 160 × 473 mm Weight: 25kg Installation: Wall Mount / Floor Stand Protection Rating: IP20 Performance Cycle Life: 6000 Cycles Parallel Support: Up to 15 Batteries Operating Temperature: Charge: 0°C to 50°C Discharge: -15°C to 50°C Warranty 10 Years",
    "technicalDetails": {
      "overview": {
        "Brand": "Volnex",
        "Model": "Alpha 2.56",
        "Battery Type": "LiFePO4 (LFP)",
        "Nominal Energy": "2.5 kW",
        "Usable Energy": "2560Wh (2.56kWh)",
        "Nominal Voltage": "25.6V"
      },
      "electrical": {
        "Nominal Capacity": "2.5 kW",
        "Cycle Life": "6000 Cycles"
      },
      "general": {
        "Operating Temperature": "Charge: 0°C to 50°C",
        "IP Rating": "IP20",
        "Dimensions": "360 × 160 × 473 mm",
        "Weight": "25kg"
      }
    }
  },
  {
    "id": "volnex-alpha-16-16kw-300a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Volnex",
    "name": "Volnex Alpha 16 (16kW) 300A Lithium Battery",
    "title": "Volnex Alpha 16 (16kW) 300A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "16 kW",
    "price": 635000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-2016kW300A.png?v=1781784725",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "16 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "LCD Display",
      "LED Indicators",
      "SOC Indicator",
      "High energy capacity rating of 16 kW",
      "Long lifespan supporting over 6000 Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V"
    ],
    "detailedDescription": "Alpha 16 (16.07kWh) Battery Model: Alpha 16 Battery Type: LiFePO4 (LFP) Usable Energy: 16,076.8Wh (16.07kWh) Nominal Voltage: 51.2V Operating Voltage: 44.8V – 56.16V Max Charge/Discharge Current: 300A Communication CAN RS485 RS232 Wi-Fi Display LCD Display LED Indicators SOC Indicator Physical Dimensions: 485 × 245 × 785 mm Weight: 122kg Installation: Floor Mount Protection Rating: IP20 Performance Cycle Life: 6000 Cycles Parallel Support: Up to 15 Batteries Operating Temperature: Charge: 0°C to 50°C Discharge: -15°C to 50°C Warranty 10 Years",
    "technicalDetails": {
      "overview": {
        "Brand": "Volnex",
        "Model": "Alpha 16",
        "Battery Type": "LiFePO4 (LFP)",
        "Nominal Energy": "16 kW",
        "Usable Energy": "16,076.8Wh (16.07kWh)",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "16 kW",
        "Cycle Life": "6000 Cycles"
      },
      "general": {
        "Operating Temperature": "Charge: 0°C to 50°C",
        "IP Rating": "IP20",
        "Dimensions": "485 × 245 × 785 mm",
        "Weight": "122kg"
      }
    }
  },
  {
    "id": "soluna-venus-16kw-314a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Soluna",
    "name": "Soluna Venus 16KW 314A Lithium Battery",
    "title": "Soluna Venus 16KW 314A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "16 kW",
    "price": 670000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/16kW314AIP65.png?v=1781445470",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "16 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 16 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Soluna Venus 16K Pack LV Battery: Model: Venus 16K Pack LV General",
    "technicalDetails": {
      "overview": {
        "Brand": "Soluna",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "16 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "16 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "knox-20kw-g2-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Xerox 20.2KW G4 Pro OnGrid Solar Inverter",
    "title": "Knox Xerox 20.2KW G4 Pro OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "20.2 kW",
    "price": 240000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_6_a6156957-bae2-47a2-b98b-cbe392f3d225.png?v=1752500438",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "20.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 20.2 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox G4 20.2kW On-Grid Solar Inverter Smart On-Grid Solution for Medium to Large Solar Installations The Knox G4 Pro 20.2k is designed for seamless integration into residential and commercial solar systems. With a capacity to handle up to 30,000W of PV input, this 20kW inverter ensures maximum solar energy utilization with advanced performance",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "20.2 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "20.2 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "powerwall-6-11-51-2v100ah-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Powerwall 6.11 51.2V 100Ah Lithium Battery",
    "title": "Knox Powerwall 6.11 51.2V 100Ah Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "0.20 kWh",
    "price": 230000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/5-kW100AIP20_3.png?v=1786267847",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "0.20 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100Ah",
      "Long lifespan supporting over &gt;6000 cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Knox Powerwall 6.11 - Model LIO 5.32 - 51.2V 100Ah 5120Wh LiFePO4 Lithium Battery (IP20, 6000 Cycles)",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4",
        "Nominal Energy": "0.20 kWh",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "100Ah",
        "Recommended Discharge Current": "50A",
        "Cycle Life": "&gt;6000 cycles"
      },
      "batteryManagement": {
        "Communication": "RS485 / RS232 / CAN"
      },
      "general": {
        "Storage Temperature": "5°C to +35°C",
        "IP Rating": "IP20",
        "Dimensions": "500 x 470 x 150 mm",
        "Weight": "44.5 ± 0.5 kg"
      }
    }
  },
  {
    "id": "anicsun-meta-ex-8kw-pv12000-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Anicsun",
    "name": "Anicsun Meta EX 8kW PV12000 Hybrid Solar Inverter",
    "title": "Anicsun Meta EX 8kW PV12000 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "8 kW",
    "price": 190000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-218kWPV-12000.png?v=1781099770",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "8 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 8 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "ANICRUN META EX 8 Solar Inverter Model: META EX 8 General",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Anicsun",
        "Model": "Solar Inverter",
        "Rated Power": "8 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "8 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "anicsun-meta-ex-4kw-pv5000-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Anicsun",
    "name": "Anicsun Meta EX 4kW PV5000 Hybrid Solar Inverter",
    "title": "Anicsun Meta EX 4kW PV5000 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "4 kW",
    "price": 95000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-214kWPV-5000.png?v=1781099491",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "4 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 4 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "ANICRUN META EX 4 Solar Inverter: Model: META EX 4 General",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Anicsun",
        "Model": "Solar Inverter",
        "Rated Power": "4 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "4 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "anicsun-meta-ex-6000",
    "category": "solar-inverters",
    "brand": "Anicsun",
    "name": "Anicsun Meta EX 6kW PV6500 Hybrid Solar Inverter",
    "title": "Anicsun Meta EX 6kW PV6500 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 110000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-216.5kWPV-6500.png?v=1781098699",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "ANICRUN META EX 6 Solar Inverter: Model: META EX 6 General",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Anicsun",
        "Model": "Solar Inverter",
        "Rated Power": "6 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "coretech-maxgen-6-5kw-pv12000-solar-inverter",
    "category": "solar-inverters",
    "brand": "Coretech",
    "name": "CoreTECH MaxGen 6.5kW PV12000 Solar Inverter",
    "title": "CoreTECH MaxGen 6.5kW PV12000 Solar Inverter",
    "model": "Solar Inverter",
    "type": "Solar Inverter",
    "subtitle": "Solar Inverter",
    "capacity": "6.5 kW",
    "price": 52000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-216.5kWPV-12000.png?v=1780745976",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Solar Inverter",
      "Capacity": "6.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "10°C to 55°C",
      "15°C to 60°C",
      "Rated power capacity of 6.5 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "CoreTECH MaxGen 6.5KW PV12000: Basic: Model: PV12000 Rated Power: 6.5kW Type: Pure Sine Wave Solar Inverter Output Voltage: 230V AC Frequency: 50Hz / 60Hz Solar (PV) Input Maximum PV Input Power: 12,000W (6000W + 6000W) Maximum PV Voltage: 500V DC Startup Voltage: 120V DC MPPT Voltage Range: 70V – 400V DC Rated PV Voltage: 370V DC Maximum PV Input Current: 18A + 18A MPPTs: 2 AC Input Nominal Input Voltage: 230V AC Maximum AC Input Voltage: 300V AC Input Frequency: 50Hz / 60Hz Voltage Range: UPS Mode: 170V – 280V Appliance Mode: 90V – 280V AC Output Rated Output Power: 6.5kW Output Waveform: Pure Sine Wave Voltage Regulation: 230V ±5% Output Frequency: 50Hz / 60Hz Overload &amp; Surge 105–110% Load: 30 seconds ≥110% Load: 10 seconds ≥150% Load: 1 second Surge Capacity: 2× Rated Power for 2 seconds Transfer Time UPS Mode: 10ms Appliance Mode: 20ms Power Consumption No-load Consumption: &lt;10W Protection Circuit Breaker Short-Circuit Protection Anti-Islanding Protection Overload Protection Surge Protection Grid Protection Physical Dimensions: 335.5 × 245 × 103 mm Weight: 4.5 kg Environment Operating Temperature: -10°C to 55°C Derating Above: 45°C Storage Temperature: -15°C to 60°C Humidity: 5% – 95% (Non-condensing) Certification CE Certified Quick Summary Power: 6.5kW PV Capacity: 12kW PV Voltage: 500V Max MPPTs: 2 PV Current: 18A + 18A Transfer Time: 10ms Weight: 4.5kg Waveform: Pure Sine Wave Certification: CE",
    "technicalDetails": {
      "overview": {
        "Product Type": "Solar Inverter",
        "Brand": "Coretech",
        "Model": "Solar Inverter",
        "Rated Power": "6.5 kW",
        "Phase": "Single Phase",
        "Application": "Solar Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6.5 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Solar Inverter"
      }
    }
  },
  {
    "id": "coretech-nextgen-6kw-single-phase-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Coretech",
    "name": "CoreTech NextGen 6KW Single Phase Hybrid Solar Inverter",
    "title": "CoreTech NextGen 6KW Single Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 180000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6KWHybridIP66_1.png?v=1777977892",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "CT NexGEN 6kW Hybrid Inverter (PV-12000) (Single Phase | Low Voltage Hybrid Inverter) General Overview Model: CT NexGEN Hybrid-SP PV12000 Rated Power: 6kW System Type: Hybrid (On-grid + Off-grid + Backup) Phase: Single Phase Battery System: 48V Low Voltage",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Coretech",
        "Model": "Solar Inverter",
        "Rated Power": "6 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "fronus-ld51-5kw-135a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Fronus",
    "name": "Fronus LD51 5kW 100A Lithium Battery",
    "title": "Fronus LD51 5kW 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 185000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-4051.2v135A_1.png?v=1779276603",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5.12kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "The Fronus LD51 5kW 100A Lithium Battery is an advanced LiFePO4 battery pack engineered by Fronus, offering 5.12kWh capacity at 51.2V nominal voltage. Its Grade-A prismatic cells are rated for 6000+ Cycles of lifecycle longevity. It features built-in BMS safety monitoring and supports parallel installation for scalable solar energy storage backup.",
    "technicalDetails": {
      "overview": {
        "Brand": "Fronus",
        "Model": "LD-51",
        "Battery Type": "LiFePO4 (LFP)",
        "Nominal Energy": "5.12kWh",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "5.12kWh",
        "Cycle Life": "6000+ Cycles",
        "Depth of Discharge": "90%"
      },
      "batteryManagement": {
        "Communication": "CAN / RS485"
      },
      "general": {
        "IP Rating": "IP40",
        "Dimensions": "335 × 626 × 169 mm",
        "Weight": "41.5kg"
      }
    }
  },
  {
    "id": "fronus-titan-5kw-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Fronus",
    "name": "Fronus Titan 51.2v 100A Lithium Battery",
    "title": "Fronus Titan 51.2v 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 180000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-2151.2v100A_1.png?v=1779194694",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "20°C to 45°C",
      "20°C to 30°C (12 months), 30°C to 60°C (6 months)",
      "High energy capacity rating of 5.12kWh / 5120Wh",
      "Long lifespan supporting over &gt;8000 Cycles @ 70% DOD lifecycles",
      "Stable nominal DC voltage output of 51.2V DC",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "FRONUS Titan 5.12kWh Battery",
    "technicalDetails": {
      "overview": {
        "Brand": "Fronus",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4",
        "Nominal Energy": "5.12kWh / 5120Wh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5.12kWh / 5120Wh",
        "Cycle Life": "&gt;8000 Cycles @ 70% DOD"
      },
      "batteryManagement": {
        "Communication": "RS485 / CAN"
      },
      "general": {
        "IP Rating": "IP21",
        "Weight": "41 KG"
      }
    }
  },
  {
    "id": "sofar-sf-5kw-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Sofar",
    "name": "Sofar SF 5kW 100A Lithium Battery",
    "title": "Sofar SF 5kW 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 245000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-2051.2v100A_1933e581-b2cc-4f63-a84e-ce382c5a104d.png?v=1779283504",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5.12kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "The Sofar SF 5kW 100A Lithium Battery is an advanced LiFePO4 battery pack engineered by Sofar, offering 5.12kWh capacity at 51.2V nominal voltage. Its Grade-A prismatic cells are rated for 6000+ Cycles of lifecycle longevity. It features built-in BMS safety monitoring and supports parallel installation for scalable solar energy storage backup.",
    "technicalDetails": {
      "overview": {
        "Brand": "Sofar",
        "Model": "SF-5KWH-L1",
        "Battery Type": "LiFePO4 (LFP)",
        "Nominal Energy": "5.12kWh",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "5.12kWh",
        "Cycle Life": "6000+ Cycles"
      },
      "batteryManagement": {
        "Communication": "CAN"
      },
      "general": {
        "IP Rating": "IP20",
        "Dimensions": "442 × 132 × 590 mm",
        "Weight": "45kg"
      }
    }
  },
  {
    "id": "fronus-titan-25-6v-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Fronus",
    "name": "Fronus Titan 25.6v 100A Lithium Battery",
    "title": "Fronus Titan 25.6v 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 115000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-2124.6v100A.png?v=1779283876",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "20°C to 45°C",
      "20°C to 60°C",
      "High energy capacity rating of 2560Wh (2.56kWh)",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 25.6V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "The Fronus Titan 25.6v 100A Lithium Battery is an advanced LiFePO4 battery pack engineered by Fronus, offering 2560Wh (2.56kWh) capacity at 25.6V nominal voltage. Its Grade-A prismatic cells are rated for 6000+ Cycles of lifecycle longevity. It features built-in BMS safety monitoring and supports parallel installation for scalable solar energy storage backup.",
    "technicalDetails": {
      "overview": {
        "Brand": "Fronus",
        "Model": "Titan 2560Wh",
        "Battery Type": "LiFePO4",
        "Nominal Energy": "2560Wh (2.56kWh)",
        "Nominal Voltage": "25.6V"
      },
      "electrical": {
        "Nominal Capacity": "2560Wh (2.56kWh)",
        "Cycle Life": "6000+ Cycles",
        "Depth of Discharge": "80%"
      },
      "batteryManagement": {
        "Communication": "RS485 / CAN"
      },
      "general": {
        "Storage Temperature": "-20°C to 60°C",
        "IP Rating": "IP21",
        "Weight": "23.4kg"
      }
    }
  },
  {
    "id": "coretech-nexgen-4-2kw-pv6000-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Coretech",
    "name": "CoreTech NewGen 4.2kW PV6000 Hybrid Solar Inverter",
    "title": "CoreTech NewGen 4.2kW PV6000 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "4.2 kW",
    "price": 85000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-204.2kWPV-6000.png?v=1779286511",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "4.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 4.2 kW for system loads",
      "Achieves peak conversion efficiency up to 94%",
      "Compatible with standard Li-Ion / Lead-Acid energy storage systems"
    ],
    "detailedDescription": "Fivestar 4.2kW Hybrid Solar Inverter — FSD-4.2K1P-BL-G3: Powers your home from solar, battery, and grid with instant switching and app monitoring.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Coretech",
        "Model": "Solar Inverter",
        "Rated Power": "4.2 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "4.2 kW",
        "MPPT Voltage Range": "60V – 450V",
        "Peak Efficiency": "94%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Type": "Li-Ion / Lead-Acid",
        "Battery Voltage Range": "24V",
        "Maximum Charging Current": "120A",
        "Maximum Discharging Current": "137A"
      },
      "general": {
        "IP Rating": "IP20",
        "Dimensions": "333 × 505 × 120mm",
        "Weight": "10.6 kg"
      }
    }
  },
  {
    "id": "fronus-ld52-5kw-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Fronus",
    "name": "Fronus LD52 5kW 100A Lithium Battery",
    "title": "Fronus LD52 5kW 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 185000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-4051.2v100A.png?v=1779195112",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over &gt;6000 Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "LD-52 Lithium-ion Battery Module",
    "technicalDetails": {
      "overview": {
        "Brand": "Fronus",
        "Model": "LD-52",
        "Battery Type": "LFP (LiFePO4)",
        "Nominal Energy": "5.12kWh",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "&gt;6000 Cycles"
      },
      "batteryManagement": {
        "Communication": "CAN / RS485"
      },
      "general": {
        "Storage Temperature": "-20°C ~ 30°C (12 months), 30°C ~ 60°C (6 months)",
        "IP Rating": "IP40 (Indoor Use Only)",
        "Installation Type": "Wall / Floor / Rack Mount",
        "Dimensions": "335 × 626 × 169 mm",
        "Weight": "N.W: 42 KG, G.W: 46 KG"
      }
    }
  },
  {
    "id": "goodwe-lynx-g3-series-5kw-100a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "GoodWe",
    "name": "Goodwe lynx G3 Series 5kW 100A Lithium Battery",
    "title": "Goodwe lynx G3 Series 5kW 100A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 265000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP-2051.2v100A.png?v=1779196585",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over 6000 Cycles @ 25°C, 0.2C, 70%EOL lifecycles",
      "Stable nominal DC voltage output of 48V DC",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "GoodWe Lynx A G3 Series LX A5.0-30",
    "technicalDetails": {
      "overview": {
        "Brand": "GoodWe",
        "Model": "LX A5.0-30",
        "Battery Type": "LFP (LiFePO4)",
        "Nominal Energy": "5.12kWh",
        "Usable Energy": "5kWh",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "6000 Cycles @ 25°C, 0.2C, 70%EOL"
      },
      "batteryManagement": {
        "Communication": "CAN"
      },
      "general": {
        "Operating Temperature": "Charge: 0°C ~ 55°C, Discharge: -20°C ~ 55°C",
        "IP Rating": "IP20",
        "Dimensions": "442 × 133 × 520 mm",
        "Weight": "44 KG"
      }
    }
  },
  {
    "id": "apex-zaroonx-5kw",
    "category": "lithium-batteries",
    "brand": "Apex",
    "name": "Apex ZaroonX 51.2v 102A Lithium Battery",
    "title": "Apex ZaroonX 51.2v 102A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.22 kWh",
    "price": 228000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP2051.2v100A_1.png?v=1779110667",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.22 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5.22 kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "The Apex ZaroonX 51.2v 102A Lithium Battery is an advanced LiFePO4 battery pack engineered by Apex, offering 5.22 kWh capacity at 51.2V DC nominal voltage. Its Grade-A prismatic cells are rated for 6000+ Cycles of lifecycle longevity. It features built-in BMS safety monitoring and supports parallel installation for scalable solar energy storage backup.",
    "technicalDetails": {
      "overview": {
        "Brand": "Apex",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5.22 kWh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5.22 kWh",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "fronus-meta-10kw-pv14000-with-netmetering-battery-less-solar-inverter",
    "category": "lithium-batteries",
    "brand": "Fronus",
    "name": "Fronus Meta 10KW PV14000 With Netmetering Battery Less Solar Inverter",
    "title": "Fronus Meta 10KW PV14000 With Netmetering Battery Less Solar Inverter",
    "model": "Solar Inverter",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "10 kW",
    "price": 48500,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/10KWPV14000.png?v=1767877345",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "10 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 10 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Fronus META-10KW PV Inverter: Rated Power: 10KW Single-Phase Solar Inverter On-Grid &amp; Off-Grid Operation Grid Feeding Supported (up to 5500W ) Maximum PV Input Power: 4500W – 13,500W Maximum DC Voltage: 500V DC MPPT Voltage Range: 60 – 450V DC MPPT Trackers: 3 MPPT (8A each) High Efficiency: Up to 97% Pure Sine Wave Output Power Factor: &gt;0.99 AC Output Voltage: 220 / 230 / 240V Output Voltage Range: 195.5 – 253V Nominal Output Current: 43.5A AC Input Voltage Range: 90 – 280V (UPS supported) Frequency: 50 / 60Hz (Auto sensing) Battery-Compatible for Off-Grid Use Built-in RS232 Communication Optional Wi-Fi Monitoring Compact &amp; Durable Design IP21 Protection Operating Temperature: -10°C to 50°C",
    "technicalDetails": {
      "overview": {
        "Brand": "Fronus",
        "Model": "Solar Inverter",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "10 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "10 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "phoenix-cube-series-25-6v-105a-lithium-batttery",
    "category": "lithium-batteries",
    "brand": "Phoenix",
    "name": "Phoenix Cube Series 25.6v 105A Lithium Batttery",
    "title": "Phoenix Cube Series 25.6v 105A Lithium Batttery",
    "model": "Lithium Batttery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "6 kW",
    "price": 125000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/25.6v5000LC.png?v=1778502855",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "6 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "20°C to +60°C",
      "20°C to +35°C",
      "High energy capacity rating of 6 kW",
      "Long lifespan supporting over 5000 cycles @ 0.5C (25°C at 80% DOD) lifecycles",
      "Stable nominal DC voltage output of 25.6 V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Phoenix RLC-2.7-X1 Lithium-Ion Battery",
    "technicalDetails": {
      "overview": {
        "Brand": "Phoenix",
        "Model": "RLC-2.7-X1",
        "Battery Type": "Lithium Iron Phosphate (LiFePO4)",
        "Nominal Energy": "2688 Wh",
        "Nominal Voltage": "25.6 V"
      },
      "electrical": {
        "Nominal Capacity": "6 kW",
        "Cycle Life": "5000 cycles @ 0.5C (25°C at 80% DOD)"
      },
      "batteryManagement": {
        "Communication": "Bluetooth App for real-time monitoring (Capacity, Voltage, Current, Cycles, SOC, SOH, Cell Voltage, Temperature)."
      },
      "general": {
        "Storage Temperature": "-20°C to +35°C",
        "Dimensions": "502 x 186 x 243 mm",
        "Weight": "20 Kg (± 1 Kg)",
        "Warranty": "3 Years Limited Warranty"
      }
    }
  },
  {
    "id": "itel-16kw-314amp-ip20-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Itel",
    "name": "Itel 16KW 314Amp IP20 Lithium Battery",
    "title": "Itel 16KW 314Amp IP20 Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "16 kW",
    "price": 602000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/16KW314AmpIP20.jpg?v=1772279073",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "16 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 16 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Model: IPL-51314H 51.2V – 16kWh – 314Ah LiFePO4 Battery Main Parameters Battery Type: LiFePO4 Nominal Voltage: 51.2V Nominal Capacity: 314Ah Nominal Energy: 16kWh Operating Voltage Range: 43.2 – 57.6V Max. Parallel Units: 32 Charge Parameters Max. Continuous Charge Current: 157A Peak Charge Current: 175A @ 1s Discharge Parameters Max. Continuous Discharge Current: 157A Peak Discharge Current: 175A @ 3s Max. Discharge Power: 16kW Recommended Depth of Discharge (DOD): 90% Cycle Life &gt;6000 cycles @25°C 0.5C charge / 0.5C discharge 80% DOD 80% End of Life (EOL) Communication CAN 2.0 / RS485 General",
    "technicalDetails": {
      "overview": {
        "Brand": "Itel",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "16 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "16 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "dyness-lithium-battery-51-2v-100amp",
    "category": "lithium-batteries",
    "brand": "Dyness",
    "name": "Dyness Lithium Battery 51.2V 100Amp 8000 LifeCycle",
    "title": "Dyness Lithium Battery 51.2V 100Amp 8000 LifeCycle",
    "model": "8000 LifeCycle",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 240000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/DynessLithiumBattery51.2V100Amp.png?v=1763548804",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5.12 kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "Dyness DL5.0C Battery Overview Designed for home + small commercial use Modular system → expandable up to 50 units Capacity range: 5.12kWh → 256kWh Uses LiFePO₄ (LFP) technology → safer &amp; long life Core",
    "technicalDetails": {
      "overview": {
        "Brand": "Dyness",
        "Model": "8000 LifeCycle",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5.12 kWh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5.12 kWh",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "dyness-powerbrick-plus-16kw-51-2v-314a-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Dyness",
    "name": "Dyness PowerBrick Max 16KW 51.2v 314A Lithium Battery",
    "title": "Dyness PowerBrick Max 16KW 51.2v 314A Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "16 kW",
    "price": 635000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/16KW314AmpIP-20_1.png?v=1778331256",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "16 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 16 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "PowerBrick Max: Battery Type: LiFePO4 (LFP) Battery Capacity: 16.07kWh Usable Capacity: 15.27kWh Voltage: 51.2V Capacity: 314Ah Working Voltage: 44.8V – 57.6V Charging / Power Recommended Charge &amp; Discharge: 140A Max Charge Current: 200A Max Discharge Current: 200A Peak Discharge Current: 300A for 2 minutes Recommended Power: 7.168kW Max Charge Power: 10.24kW Max Discharge Power: 10.24kW Battery Performance DOD: 95% Cycle Life: 8000+ cycles Warranty: 10 Years Temperature Charging Temperature: 0°C to 55°C Optional Self-Heating: -20°C to 55°C Discharge Temperature: -20°C to 55°C Build Weight: 116kg Size: 435 × 233 × 857 mm Protection Rating: IP20 Connectivity Communication: CAN / RS485 WiFi + APP Support Safety Built-in aerosol fire extinguisher Installation Floor Mount Wall Mount Expansion Supports up to 50 batteries in parallel Compatible Inverters Deye Solis GoodWe Growatt Luxpower Victron SMA APsystem Certifications UN38.3 IEC62619",
    "technicalDetails": {
      "overview": {
        "Brand": "Dyness",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "16 kW",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "16 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "livoltek-homcellar-16kw-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Livoltek",
    "name": "Livoltek HomCellar 16KW Lithium Battery",
    "title": "Livoltek HomCellar 16KW Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "16 kW",
    "price": 610000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/16kWIP20.png?v=1775915628",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "16 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 16 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Livoltek HomCellar-16-B2 – 16kWh Low-Voltage Lithium Battery Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Brand": "Livoltek",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "16 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "16 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "itel-portable-battery-pack-1-kw",
    "category": "lithium-batteries",
    "brand": "Itel",
    "name": "Itel Portable Battery Pack 1-kW",
    "title": "Itel Portable Battery Pack 1-kW",
    "model": "Pack 1-kW",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "6 kW",
    "price": 74000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/ItelPortableDevice.png?v=1777374956",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "6 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 6 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "IESS-05K10N – Portable Power Tank (3-in-1 ESS) (Portable Energy Storage System) General Overview Model: IESS-05K10N Type: Portable Energy Storage System (ESS) Design: 3-in-1 (Battery + Inverter + MPPT) Application: Home backup / portable power / small appliances System Components Battery: 1000Wh LiFePO₄ (Class-A cells) Inverter: 500W Hybrid Inverter (Pure Sine Wave) MPPT Controller: 400W Battery",
    "technicalDetails": {
      "overview": {
        "Brand": "Itel",
        "Model": "Pack 1-kW",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "6 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "6 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "long-life-3kw-solar-inverter-hybrid",
    "category": "solar-inverters",
    "brand": "Long Life",
    "name": "LONG LIFE 3KW Hybrid Solar Inverter",
    "title": "LONG LIFE 3KW Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "3 kW",
    "price": 75000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/LONGLIFE3KWsolarinverter.png?v=1752736990",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "3 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "80A (1.2K / 2.5K / 3K Premium)",
      "100A (3K model)",
      "170–280V AC (for PCs)",
      "90–280V AC (for Home Appliances)",
      "Rated power capacity of 3 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "LONG LIFE 3KW: Type : Pure Sine Wave | Hybrid Inverter Rated Power : 3000VA / 3000W Battery Voltage : 24V DC",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Long Life",
        "Model": "Solar Inverter",
        "Rated Power": "3 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "3 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "power-square-3kw-hybrid",
    "category": "solar-inverters",
    "brand": "Power Square",
    "name": "POWER SQUARE VM II PLUS 3KW Off Grid Hybrid Solar Inverter",
    "title": "POWER SQUARE VM II PLUS 3KW Off Grid Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "3 kW",
    "price": 75000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/POWERSQUAREVMIIPLUS3KWOffGridHybridSolarInverter.png?v=1753253116",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "3 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 3 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "POWER SQUARE VM II PLUS 3KW Rated Power : 3000VA / 3000W Waveform : Pure Sine Wave",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Power Square",
        "Model": "Solar Inverter",
        "Rated Power": "3 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "3 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "ziewnic-lobo-series-6kw-pv-9000-with-netmetering-battery-less-off-grid-solar-inverter",
    "category": "lithium-batteries",
    "brand": "Ziewnic",
    "name": "Ziewnic LoBo Series 6kw PV 9000 With Netmetering Battery Less Off Grid Solar Inverter",
    "title": "Ziewnic LoBo Series 6kw PV 9000 With Netmetering Battery Less Off Grid Solar Inverter",
    "model": "Solar Inverter",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "6 kW",
    "price": 46000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6kWPV9000.png?v=1775912805",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "6 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 6 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "LOBO SP – PV9000: Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Brand": "Ziewnic",
        "Model": "Solar Inverter",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "6 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "6 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "coretech-luxwatt-5kw",
    "category": "lithium-batteries",
    "brand": "Coretech",
    "name": "CoreTech Luxwatt 5kW 100Ah 51.2v Lithium Battery",
    "title": "CoreTech Luxwatt 5kW 100Ah 51.2v Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 230000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/51.2v100AhIP20.png?v=1775644029",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "CoreTECH ES-BOX42 – 5.12kWh Wall-Mounted Lithium Battery Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Brand": "Coretech",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5 kW",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "luminey-monawall-5kw-ip65-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Luminey",
    "name": "Luminey MonaWall 5KW IP65 Lithium Battery",
    "title": "Luminey MonaWall 5KW IP65 Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 275000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/51.2v100AIP65.png?v=1775643329",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "10°C to +50°C",
      "20°C to +50°C",
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Luminey MonaWall-SE5 – 5kWh Wall-Mounted Lithium Battery Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Brand": "Luminey",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "eve-energy-lvi-2-0-wallmount-5kw-51-2v-100ah-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Eve Energy",
    "name": "Eve Energy LVI 2.0 WallMount 5KW 51.2v 100Ah Lithium Battery",
    "title": "Eve Energy LVI 2.0 WallMount 5KW 51.2v 100Ah Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 240000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/51.2v100AIP20_1.png?v=1775560744",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "EVE-LVW-2.0 – Residential Wall-Mounted Lithium Battery System Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Brand": "Eve Energy",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5 kW",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "itel-12kw-3-phase-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Itel",
    "name": "Itel 12KW Single-Phase Hybrid Solar Inverter",
    "title": "Itel 12KW Single-Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "12 kW",
    "price": 275000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/12KWHybridIP54.png?v=1775297766",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "12 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 12 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "IPV-12K48U – 12kW Hybrid Inverter (Single Phase, IP54) Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Itel",
        "Model": "Solar Inverter",
        "Rated Power": "12 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "12 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "itel-8kw-3-phase-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Itel",
    "name": "Itel 8KW Single-Phase Hybrid Solar Inverter",
    "title": "Itel 8KW Single-Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "8 kW",
    "price": 220000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/8KWHybridIP54.png?v=1775297568",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "8 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 8 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "IPV-8K48U – 8kW Hybrid Inverter (Single Phase, IP54) Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Itel",
        "Model": "Solar Inverter",
        "Rated Power": "8 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "8 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "itel-6kw-single-phase-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Itel",
    "name": "Itel 6KW Single Phase Hybrid Solar Inverter",
    "title": "Itel 6KW Single Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 145000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6KWHybridIP54.png?v=1774874653",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "IPV-6K48U Pro – 6kW Hybrid Inverter (Single Phase) Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Itel",
        "Model": "Solar Inverter",
        "Rated Power": "6 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "itel-4kw-single-phase-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Itel",
    "name": "Itel 4KW Single Phase Hybrid Solar Inverter",
    "title": "Itel 4KW Single Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "4 kW",
    "price": 120000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/4KWHybridIP54_1.png?v=1774874345",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "4 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 4 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "IPV-4K24U Pro – 4kW Hybrid Inverter (Single Phase) Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Itel",
        "Model": "Solar Inverter",
        "Rated Power": "4 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "4 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "coretech-nextgen-10kw-single-phase-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Coretech",
    "name": "CoreTech NextGen 10KW Single Phase Hybrid Solar Inverter",
    "title": "CoreTech NextGen 10KW Single Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "10 kW",
    "price": 283000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/10KWHybridIP66.png?v=1774778677",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "CT NexGEN 10kW Hybrid-SP PV20000 – Single Phase Hybrid Inverter Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Coretech",
        "Model": "Solar Inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "coretech-nextgen-8kw-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Coretech",
    "name": "CoreTech NextGen 8KW Single Phase Hybrid Solar Inverter",
    "title": "CoreTech NextGen 8KW Single Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "8 kW",
    "price": 230000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/8KWHybridIP66.png?v=1774778444",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "8 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 8 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "CT NexGEN 8kW Hybrid-SP PV16000 – Single Phase Hybrid Inverter Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Coretech",
        "Model": "Solar Inverter",
        "Rated Power": "8 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "8 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "crown-yorker-6kw-ip21-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Crown",
    "name": "Crown Yorker 6KW IP21 Hybrid Solar Inverter",
    "title": "Crown Yorker 6KW IP21 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 115000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6-KWHybridIP-21.jpg?v=1774348839",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "10°C to +55°C",
      "15°C to +60°C",
      "Rated power capacity of 6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "CSE-Y6K48VP1 – Single Phase Hybrid Inverter Detailed Technical",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Crown",
        "Model": "Solar Inverter",
        "Rated Power": "6 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "itel-2-5kw-25-6v-100amp-ip-20-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Itel",
    "name": "Itel 2.5KW 25.6v 100Amp IP-20 Lithium Battery",
    "title": "Itel 2.5KW 25.6v 100Amp IP-20 Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "2.5 kW",
    "price": 130000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/2.5-KW100AmpIP20.jpg?v=1773313934",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "2.5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100 Ah",
      "Long lifespan supporting over ≥ 6000 cycles lifecycles",
      "Stable nominal DC voltage output of 25.6 V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "The Itel IPW-25100 LiFePO₄ Lithium Battery 25.6V 100Ah is a compact lithium energy-storage battery mainly designed for solar backup systems, small hybrid inverters, and off-grid power setups . It uses LiFePO₄ (Lithium Iron Phosphate) chemistry, which is known for high safety, long lifespan, and stable thermal performance. Below is a complete and structured breakdown of all",
    "technicalDetails": {
      "overview": {
        "Brand": "itel",
        "Model": "IPW-25100",
        "Battery Type": "Solar energy storage battery",
        "Nominal Energy": "2.56 kWh",
        "Nominal Voltage": "25.6 V"
      },
      "electrical": {
        "Nominal Capacity": "100 Ah",
        "Charge Voltage": "20 V",
        "Discharge Voltage": "20 V",
        "Cycle Life": "≥ 6000 cycles"
      },
      "batteryManagement": {
        "Communication": "RS485 / RS232 / CAN"
      },
      "general": {
        "IP Rating": "IP21",
        "Dimensions": "454 × 410 × 135 mm",
        "Weight": "27 kg"
      }
    }
  },
  {
    "id": "itel-5kw-51-2v-100amp-ip-20-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Itel",
    "name": "Itel 5KW 51.2v 100Amp IP-20 Lithium Battery",
    "title": "Itel 5KW 51.2v 100Amp IP-20 Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 235000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/5-KW100AmpIP20.jpg?v=1773312773",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100 Ah",
      "Long lifespan supporting over 6000+ cycles lifecycles",
      "Stable nominal DC voltage output of 51.2 V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Itel IPL-51100 LiFePO₄ Battery (5.12 kWh) Basic Product Information Specification Details Model IPL-51100 Brand itel Battery Chemistry LiFePO₄ (Lithium Iron Phosphate) Battery Type Solar energy storage battery Application Residential / commercial solar backup Design Life 10 years Cycle Life 6000+ cycles Electrical",
    "technicalDetails": {
      "overview": {
        "Brand": "itel",
        "Model": "IPL-51100",
        "Battery Type": "Solar energy storage battery",
        "Nominal Energy": "5.12 kWh",
        "Nominal Voltage": "51.2 V"
      },
      "electrical": {
        "Nominal Capacity": "100 Ah",
        "Charge Voltage": "40 V",
        "Discharge Voltage": "40 V",
        "Cycle Life": "6000+ cycles"
      },
      "batteryManagement": {
        "Communication": "RS485 / CAN / RS232"
      },
      "general": {
        "IP Rating": "IP20",
        "Dimensions": "450 × 510 × 153 mm",
        "Weight": "50 kg"
      }
    }
  },
  {
    "id": "solis-solis-10kw-ip66-l-plus-model-hybrid-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 10KW IP66 L Plus Model Hybrid Inverter",
    "title": "Solis 10KW IP66 L Plus Model Hybrid Inverter",
    "model": "Hybrid Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "10 kW",
    "price": 398000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/10KWIP-66HYBRID.png?v=1773309338",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Supports 2 / 3 independent MPPT tracking inputs",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Compatible with standard Li-ion / Lead-acid energy storage systems",
      "Handles high solar input configurations up to 1000 V"
    ],
    "detailedDescription": "Solis S6-EH3P10K02-NV-YD-L (10 kW Model) Key",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Solis",
        "Model": "Hybrid Inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Maximum PV Input Power": "16 kW",
        "Maximum PV Input Voltage": "1000 V",
        "MPPT Voltage Range": "200 – 850 V",
        "Number of MPPTs": "2 / 3",
        "Maximum PV Input Current": "15.2 A",
        "Maximum Short-Circuit Current": "50 A / 50 A",
        "Rated Output Current": "15.2 A / 14.4 A",
        "Maximum Output Current": "15.2 A",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Type": "Li-ion / Lead-acid",
        "Battery Voltage Range": "40 – 60 V",
        "Maximum Charging Current": "220 A",
        "Maximum Discharging Current": "220 A"
      }
    }
  },
  {
    "id": "muxtronics-ultra-pv9000-6kw-solar-inverter",
    "category": "solar-inverters",
    "brand": "Kamal Solar",
    "name": "Muxtronics Ultra PV9000 6KW Solar Inverter",
    "title": "Muxtronics Ultra PV9000 6KW Solar Inverter",
    "model": "Solar Inverter",
    "type": "Solar Inverter",
    "subtitle": "Solar Inverter",
    "capacity": "6 kW",
    "price": 48000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6KWPV-9000.png?v=1770905728",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Solar Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Core Performance: Rated Output Power: 6KW Output Voltage: 230Vac ±5% Output Frequency: 50/60 Hz Voltage Waveform: Pure Sinewave Solar (PV)",
    "technicalDetails": {
      "overview": {
        "Product Type": "Solar Inverter",
        "Brand": "Kamal Solar",
        "Model": "Solar Inverter",
        "Rated Power": "6 kW",
        "Phase": "Single Phase",
        "Application": "Solar Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Solar Inverter"
      }
    }
  },
  {
    "id": "ziewnic-roux-series-3-5kw-pv-5000-ip54-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Ziewnic",
    "name": "Ziewnic Roux Series 3.5KW PV-5000 IP54 Hybrid Solar Inverter",
    "title": "Ziewnic Roux Series 3.5KW PV-5000 IP54 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "3.5 kW",
    "price": 90000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Hybrid3.5-KWIP-54.png?v=1772110513",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "3.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 3.5 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "ROUX Mini – PV5000 (3.5KW) Real 6th Generation | IP54 Protection | True MPPT | 80A Charger General Overview Model: ROUX Mini – PV5000 Rated Power: 3500VA (3.5KW) Inverter Type: Real 6th Generation – High Frequency Technology: High-Efficiency MOSFET with Enhanced Chopper Design Output Waveform: 100% Pure Sine Wave Power Factor: 1.0 IP Rating: IP54 (Dust &amp; Water Splash Resistant) Engineered in: Taiwan Built-in Automatic Electronic Breaker Upgraded Modern LCD Display Optional Wi-Fi Monitoring Compatible with: Utility (WAPDA) Generator Battery Mode Fully Compatible with Lithium Batteries Smart &amp; Safe Protection System AC INPUT",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Ziewnic",
        "Model": "Solar Inverter",
        "Rated Power": "3.5 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "3.5 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "ziewnic-roux-series-11-7kw-pv-15000-ip54-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Ziewnic",
    "name": "Ziewnic Roux Series 11.7KW PV-15000 IP54 Hybrid Solar Inverter",
    "title": "Ziewnic Roux Series 11.7KW PV-15000 IP54 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "11.7 kW",
    "price": 355000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Hybrid11.7-KWIP-54.png?v=1772109865",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "11.7 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 11.7 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "ROUX 11.7KW (PV15000) – IP54 Hybrid Inverter General Rated Power (AC): 12000W Rated Power (PV Mode): 11700W Rated Power (DC Mode): 11000W Power Factor: 1.0 IP54 Aluminium Body Dual MPPT 98% Sharing Built-in Wi-Fi Monitoring Reverse Grid Feeding AC INPUT 220/230/240VAC 90–280VAC (Normal) 170–280VAC (UPS) 50/60Hz Auto AC OUTPUT 220/230/240VAC ±5% 50/60Hz ±0.1% Pure Sine Wave Transfer Time: 10ms / 20ms Peak Power: 22,200VA Overload: 110–150% → 10.5 sec 150–200% → 5.5 sec 200% → 200ms Efficiency: &gt;94% BATTERY Rated Voltage: 48VDC Constant Charging Voltage: 56.4VDC Float Charging Voltage: 54VDC Max PV Charging Current: 150A Max AC Charging Current: 150A Max Total Charging Current: 150A Lithium / GEL / VRLA Supported Lithium Activation &amp; Wake-up RS485 / CAN SOLAR (PV) Max PV Input Power: 15,000W MPPT Range: 90–500VDC Best Vmp Range: 360–430VDC Max PV Voltage: 500VDC Max PV Current: 32A + 32A Dual MPPT 150A Solar Charging System DIMENSIONS 662.5 × 432.6 × 131.5 mm",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Ziewnic",
        "Model": "Solar Inverter",
        "Rated Power": "11.7 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "11.7 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "ziewnic-roux-series-6-7kw-pv-9000-ip54-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Ziewnic",
    "name": "Ziewnic Roux Series 6.7KW PV-9000 IP54 Hybrid Solar Inverter",
    "title": "Ziewnic Roux Series 6.7KW PV-9000 IP54 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6.7 kW",
    "price": 177000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Hybrid6.7-KWIP-54_1.png?v=1772109645",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6.7 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6.7 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "ROUX 6.7KW (PV9000) – IP54 Hybrid Inverter General Rated Power (AC): 7000W Rated Power (PV Mode): 6700W Rated Power (DC Mode): 6500W Power Factor: 1.0 Dual MPPT IP54 Aluminium Body Built-in Wi-Fi 98% Real-time Sharing AC INPUT 220/230/240VAC 90–280VAC (Normal) 170–280VAC (UPS) 50/60Hz Auto AC OUTPUT 220/230/240VAC ±5% 50/60Hz ±0.1% Pure Sine Wave Transfer Time: 10ms / 20ms Peak Power: 12,400VA Overload: 110–150% → 10.5 sec 150–200% → 5.5 sec 200% → 200ms Efficiency: &gt;94% BATTERY Rated Voltage: 48VDC Constant Charge Voltage: 56.4VDC Float Voltage: 54VDC Max PV Charging Current: 120A Max AC Charging Current: 100A Max Total Charging Current: 120A Lithium / GEL / VRLA Supported RS485 / CAN Communication SOLAR (PV) Max PV Power: 9000W MPPT Range: 60–500VDC Best Vmp: 360–430VDC Max PV Voltage: 500VDC Max PV Current: 36A Dual MPPT 150A Solar Charge Platform DIMENSIONS 529 × 411.5 × 111.5 mm",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Ziewnic",
        "Model": "Solar Inverter",
        "Rated Power": "6.7 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6.7 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "ziewnic-box-european-100amp-51-2v-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Ziewnic",
    "name": "Ziewnic Box European 100Amp 51.2v Lithium Battery",
    "title": "Ziewnic Box European 100Amp 51.2v Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 293000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/100Amp51.2vIP-21.png?v=1772108856",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5.12 kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "Z-BOX 100Ah – 51.2V (European Series) General Information Model: Z-BOX 100Ah – 51.2V Design: European Standard – Wall Mounted / Floor Standing Battery Type: LiFePO4 Cycle Life: &gt;8000 Cycles @ 80% DOD Warranty: 10 Years IP Rating: IP21 Max Parallel Support: Up to 16 Units Built-in 100A Smart BMS Built-in Wi-Fi &amp; Bluetooth RGB LED Capacity Indicator App Monitoring: GenixGreen / Ziewnic (iOS &amp; Android) Electrical",
    "technicalDetails": {
      "overview": {
        "Brand": "Ziewnic",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5.12 kWh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5.12 kWh",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "ziewnic-roux-series-4-7kw-pv-7000-ip54-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Ziewnic",
    "name": "Ziewnic Roux Series 4.7KW PV-7000 IP54 Hybrid Solar Inverter",
    "title": "Ziewnic Roux Series 4.7KW PV-7000 IP54 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "4.7 kW",
    "price": 144000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Hybrid4.7-KWIP-54.png?v=1772108016",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "4.7 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 4.7 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "ROUX 4.7KW (PV7000) – IP54 Hybrid Inverter General Information Model: ROUX 4.7KW (PV7000) Rated Power (AC): 5000W Rated Power (PV Mode): 4700W Rated Power (DC Mode): 4500W Output Power Factor: 1.0 Topology: High Frequency Hybrid Inverter Protection Grade: IP54 (Dust &amp; Water Resistant) Casing: Aluminium Display: Colorful Touch LCD with Touch Buttons Built-in Wi-Fi (iOS &amp; Android App: Ziewnic Inverter / PV Pro ) External Light Indicator Real-time load power display Reverse grid feeding supported 98% real-time sharing Repairable warranty AC INPUT Rated AC Input: 220/230/240VAC Input Voltage Range: 90–280VAC ±3V (Normal Mode) 170–280VAC ±3V (UPS Mode) Frequency: 50/60Hz (Auto Detection) AC OUTPUT Output Voltage: 220/230/240VAC ±5% Output Frequency: 50/60Hz ±0.1% Output Waveform: Pure Sine Wave Transfer Time: 10ms (Computer Equipment) 20ms (Home Appliances) Peak Power: 8000VA Overload Capability: 110–150% load → 10.5 seconds 150–200% load → 5.5 seconds 200% load → 200ms Peak Efficiency: &gt;94% BATTERY",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Ziewnic",
        "Model": "Solar Inverter",
        "Rated Power": "4.7 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "4.7 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "huawei-20kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Huawei",
    "name": "HUAWEI 20KW solar inverter ongrid",
    "title": "HUAWEI 20KW solar inverter ongrid",
    "model": "inverter ongrid",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "20 kW",
    "price": 333000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_30.png?v=1737898387",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "20 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 20,000W (20kW) for system loads",
      "Supports 2 (Independent tracking for flexibility) independent MPPT tracking inputs",
      "Achieves peak conversion efficiency up to 98.65% , ensuring high performance and lower energy loss.",
      "Handles high solar input configurations up to 1080V"
    ],
    "detailedDescription": "The Huawei SUN2000-20KTL-M0 is a robust 20kW on-grid solar inverter designed for high-efficiency solar energy conversion. It comes with several",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Huawei",
        "Model": "SUN2000-20KTL-M0",
        "Rated Power": "20,000W (20kW)",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "20,000W (20kW)",
        "Maximum PV Input Voltage": "1080V",
        "Number of MPPTs": "2 (Independent tracking for flexibility)",
        "AC Output Voltage": "220V/380V or 230V/400V (3-phase, depending on the setup)",
        "Maximum Output Current": "33.5A",
        "Peak Efficiency": "98.65% , ensuring high performance and lower energy loss."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "protection": {
        "Surge Protection": "DC and AC surge protection to safeguard the system from voltage spikes."
      }
    }
  },
  {
    "id": "huawei-25kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Huawei",
    "name": "HUAWEI 25KW solar inverter ongrid",
    "title": "HUAWEI 25KW solar inverter ongrid",
    "model": "inverter ongrid",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "25 kW",
    "price": 365000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_31.png?v=1737898386",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "25 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Anti-Islanding Protection",
      "Overvoltage Protection",
      "Overcurrent Protection",
      "Residual Current Device (RCD)",
      "Reverse Polarity Protection",
      "Isolation Monitoring"
    ],
    "detailedDescription": "The Huawei SUN2000-25KTL-M5 is a 25 kW three-phase on-grid solar inverter, primarily designed for medium to large commercial and industrial solar installations. Here's a detailed breakdown of its",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Huawei",
        "Model": "inverter ongrid",
        "Rated Power": "25 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "25 kW",
        "MPPT Voltage Range": "470–850 V",
        "AC Output Frequency": "50/60 Hz",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Dimensions": "546 mm x 460 mm x 228 mm",
        "Weight": "21 kg"
      }
    }
  },
  {
    "id": "solarmax-6kw-ip-65-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "SolarMax",
    "name": "SolarMax 6KW IP-65 Hybrid Solar Inverter",
    "title": "SolarMax 6KW IP-65 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 190000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6KWHybridIP-66_1.png?v=1771677999",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6000 W for system loads",
      "Achieves peak conversion efficiency up to Max Efficiency: 97.6%, MPPT Efficiency: 99.9%, Euro Efficiency: 96.5%",
      "Handles high solar input configurations up to 500 V"
    ],
    "detailedDescription": "SM-SOLON-UL-6KW Solar Inverter Reliable, Efficient, and Safe Energy Solution Powering your world with clean, renewable energy, the SM-SOLON-UL-6KW inverter provides high-efficiency conversion with cutting-edge protection",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "SolarMax",
        "Model": "SM-SOLON-UL-6KW",
        "Rated Power": "6000 W",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6000 W",
        "Maximum PV Input Power": "9200 Wp",
        "Maximum PV Input Voltage": "500 V",
        "Peak Efficiency": "Max Efficiency: 97.6%, MPPT Efficiency: 99.9%, Euro Efficiency: 96.5%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Voltage Range": "40-60 VDC",
        "Maximum Charging Current": "135 A",
        "Maximum Discharging Current": "135 A"
      },
      "protection": {
        "Surge Protection": "DC Type II, AC Type II"
      },
      "general": {
        "IP Rating": "IP65",
        "Weight": "20.5 kg"
      }
    }
  },
  {
    "id": "coretech-sunwoda-energy-atrix-smart-5-51-2v-100amp-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Coretech",
    "name": "CoreTech Sunwooda Atrix Smart 5 51.2v 100Amp Lithium Battery",
    "title": "CoreTech Sunwooda Atrix Smart 5 51.2v 100Amp Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 225000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/51.2100AmpIP20.png?v=1770548600",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5.12 kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "This is a CoreTech Sunwoda Energy Atrix Smart 5 lithium battery: Capacity: 5kWh Voltage: 51.2V Chemistry: LiFePO₄ (Lithium Iron Phosphate) Use case: Home solar storage, hybrid/off-grid systems Key",
    "technicalDetails": {
      "overview": {
        "Brand": "Coretech",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5.12 kWh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5.12 kWh",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "byd-battery-box-5kw",
    "category": "lithium-batteries",
    "brand": "BYD",
    "name": "BYD Battery Box LV5.0+ 100A 51.2v Lithium Battery",
    "title": "BYD Battery Box LV5.0+ 100A 51.2v Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 280000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/BYDLV5.0_100A51.2v.png?v=1767529127",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5.12 kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "BYD Battery-Box LV5.0+ Energy Storage System: Powered by Ô DIWAN® International (Pvt) Ltd The BYD Battery-Box LV5.0+ is a high-performance, safe, and scalable energy storage solution designed for residential, commercial, and industrial use. Built with advanced LFP (Lithium Iron Phosphate) technology , it delivers long life, high efficiency, and reliable power storage. Superior Safety Uses LFP cells developed in-house by BYD Technology proven in millions of electric vehicles worldwide High thermal stability and long lifespan Proven Reliability LFP expertise since 2002 Over 1 million systems installed Trusted in 100+ countries globally High Performance Maximum 1C charge &amp; discharge rate Supports 100% Depth of Discharge (DOD) Delivers consistent and stable power output Flexible &amp; Scalable Expandable up to 163.84 kWh capacity Compatible with BYD and most major inverter brands Ideal for growing energy needs Ultra User Experience Plug-and-Play power cable for easy installation One-click auto-configuration with compatible inverters Minimal setup time Intelligent Energy Management 24/7 online monitoring &amp; performance analysis Remote diagnosis and OTA updates Real-time energy data and flow visualization via the BYD Energy App Battery-Box LV5.0+ Capacity Options Single LV5.0+ module Expandable up to 32 × LV5.0+ modules Maximum total capacity: 163.84 kWh",
    "technicalDetails": {
      "overview": {
        "Brand": "BYD",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5.12 kWh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "5.12 kWh",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "coretech-1-6kw-pv-2200-ip21-offgrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Coretech",
    "name": "CoreTech 1.6kW PV 2200 IP21 OffGrid Solar Inverter",
    "title": "CoreTech 1.6kW PV 2200 IP21 OffGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Off-Grid Inverter",
    "subtitle": "Off-Grid Inverter",
    "capacity": "1.6 kW",
    "price": 44000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/CoreTech1.6kWPV2200IP21OffGridSolarInverter.png?v=1769602966",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Off-Grid Inverter",
      "Capacity": "1.6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "10°C to 50°C",
      "15°C to 60°C",
      "Rated power capacity of 1.6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "CoreTECH ProGEN PV 2200 – 1.6kW OffGrid Solar Inverter Product Overview The CoreTECH ProGEN PV 2200 (1.6kW) is a compact hybrid solar inverter designed to power home appliances efficiently. It converts solar energy into battery storage and provides uninterrupted power during night time or power outages. General",
    "technicalDetails": {
      "overview": {
        "Product Type": "Off-Grid Inverter",
        "Brand": "Coretech",
        "Model": "Solar Inverter",
        "Rated Power": "1.6 kW",
        "Phase": "Single Phase",
        "Application": "Off-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "1.6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Off-Grid Inverter"
      }
    }
  },
  {
    "id": "galaxy-envy-pv-9000-6kw-solar-inverter",
    "category": "lithium-batteries",
    "brand": "Galaxy",
    "name": "Galaxy Envy PV 9000 6KW With Netmetering Battery Less Solar Inverter",
    "title": "Galaxy Envy PV 9000 6KW With Netmetering Battery Less Solar Inverter",
    "model": "Solar Inverter",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "6 kW",
    "price": 37000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/EnvyPV9000.png?v=1767696239",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "6 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 6 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Galaxy Envy PV9000 6kW Solar Inverter Battery-Free | On-Grid &amp; Off-Grid PV System | Pakistan The Galaxy Envy PV9000 6kW Solar Inverter is a powerful, modern battery-free solar solution designed for homes, shops, and small businesses in Pakistan. It runs directly on solar panels and grid power , helping you reduce electricity bills without investing in costly batteries.",
    "technicalDetails": {
      "overview": {
        "Brand": "Galaxy",
        "Model": "Solar Inverter",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "6 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "6 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "growatt-10kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Growatt",
    "name": "GROWATT 10KW OnGrid solar inverter",
    "title": "GROWATT 10KW OnGrid solar inverter",
    "model": "solar inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10 kW",
    "price": 170000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/GROWATT10KWOnGridsolarinverter.png?v=1753253393",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Growatt MOD 10KTL3-X 10kW Three Phase On-Grid Inverter",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Growatt",
        "Model": "solar inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "huawei-30kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Huawei",
    "name": "Huawei 30kW OnGrid Solar Inverter",
    "title": "Huawei 30kW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "30 kW",
    "price": 575000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Huawei30kWOnGridSolarInverter.png?v=1755756925",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "30 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 30 kW for system loads",
      "Achieves peak conversion efficiency up to Achieves up to 98.7% efficiency, ensuring optimal energy conversion."
    ],
    "detailedDescription": "The Huawei SUN2000-30KTL-M3 is a powerful 30 kW three-phase on-grid solar inverter designed to handle demanding solar systems, particularly for large commercial or industrial applications. Here’s a detailed overview:",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Huawei",
        "Model": "Solar Inverter",
        "Rated Power": "30 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "30 kW",
        "MPPT Voltage Range": "Multiple MPPTs optimize energy capture across diverse conditions.",
        "AC Output Frequency": "50/60 Hz",
        "Peak Efficiency": "Achieves up to 98.7% efficiency, ensuring optimal energy conversion."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "protection": {
        "Over-Voltage Protection": "Both AC and DC circuits are protected to prevent damage."
      },
      "general": {
        "Dimensions": "640 x 530 x 270 mm",
        "Weight": "43 kg (including mounting plate)"
      }
    }
  },
  {
    "id": "livoltek-15kw-ongrid-three-phase-solar-inverter",
    "category": "solar-inverters",
    "brand": "Livoltek",
    "name": "Livoltek 15KW OnGrid Three Phase Solar Inverter",
    "title": "Livoltek 15KW OnGrid Three Phase Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "15 kW",
    "price": 165000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_1_29470a11-366d-4b7d-9330-ef4ad936236b.png?v=1753255194",
    "specs": {
      "Phase": "3-Phase Output",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "15 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 15KW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "Livoltek 10kW and 15kW on-grid solar inverters are available at kamalsolar.pk . Livoltek offers a variety of solar inverters, including on-grid, off-grid, and hybrid models, at lower prices than other solar companies. .pk Three Phase Grid-tied Inverter 15KW The LIVOLTEK GT3-15KD1R11007 is a high-performance three-phase grid-tied inverter, engineered for residential and commercial rooftop installations. Designed to maximize energy efficiency, this inverter is equipped with advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Livoltek",
        "Model": "GT3-15KD1R11007",
        "Rated Power": "15KW",
        "Phase": "3-Phase Output",
        "Application": "Residential & Commercial Rooftops"
      },
      "technicalSpecifications": {
        "Rated Output Power": "15KW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Monitoring": "Smart App"
      }
    }
  },
  {
    "id": "inverex-nitrox-6kw-solar-inverter-hybrid",
    "category": "solar-inverters",
    "brand": "Inverex",
    "name": "Inverex Nitrox 6.6KW Solar inverter Hybrid",
    "title": "Inverex Nitrox 6.6KW Solar inverter Hybrid",
    "model": "inverter Hybrid",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6.6 kW",
    "price": 275000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_3.png?v=1737898385",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6.6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Built-in AC Breaker for protection against electrical faults.",
      "Comes with a 5-year warranty and 7-day returns & exchange policy for peace of mind.",
      "Rated power capacity of 6000W (6kW) for system loads",
      "Achieves peak conversion efficiency up to 97.6% Max Efficiency",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "Inverex Nitrox 6kW - 48V Solar Inverter The Inverex Nitrox 6kW Solar Inverter is designed for high efficiency and reliable performance in solar energy systems. With advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Inverex",
        "Model": "inverter Hybrid",
        "Rated Power": "6000W (6kW)",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6000W (6kW)",
        "Peak Efficiency": "97.6% Max Efficiency"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "general": {
        "Monitoring": "SOLARMAN App",
        "IP Rating": "Internal SPD, AC Breaker"
      }
    }
  },
  {
    "id": "knox-krypton-eco-pv-4000-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Krypton Eco PV-4000 Hybrid Solar Inverter",
    "title": "Knox Krypton Eco PV-4000 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 75000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/KnoxEcoPV4000Hybrid.png?v=1762175028",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 4000 VA / 4000 W for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Krypton Eco 4000 – On-Grid Solar Inverter Model: 3kW-24-pV4000 Series: Knox Type: On-Grid Inverter with Energy Storage (Battery Optional)",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "4000 VA / 4000 W",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "4000 VA / 4000 W",
        "AC Output Voltage": "230 VAC ± 5%",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "crown-51-2v-100a-lithium-ion-battery",
    "category": "lithium-batteries",
    "brand": "Crown",
    "name": "Crown 51.2v 100A Lithium ion battery IP30 Rating",
    "title": "Crown 51.2v 100A Lithium ion battery IP30 Rating",
    "model": "IP30 Rating",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 235000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Crown51.2v100A.png?v=1759668504",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100Ah",
      "Long lifespan supporting over &gt;6000 cycles @ 80% DoD lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Crown 51.2V-100Ah Lithium-Ion Battery (LiFePO₄) Reliable Solar Energy Storage Solution The Crown 51.2V-100Ah Lithium-Ion Battery is a premium-grade energy storage unit designed for residential and commercial solar systems . Built with LiFePO₄ (Lithium Iron Phosphate) chemistry, it ensures high safety, efficiency, and long life , making it an excellent choice for backup and hybrid solar setups.",
    "technicalDetails": {
      "overview": {
        "Brand": "Crown",
        "Model": "Crown 51.2V-100Ah",
        "Battery Type": "Lithium Iron Phosphate (LiFePO₄)",
        "Nominal Energy": "5.12 kWh",
        "Usable Energy": "5.12 kWh",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "100Ah",
        "Cycle Life": "&gt;6000 cycles @ 80% DoD"
      },
      "batteryManagement": {
        "Communication": "RS485 / CAN",
        "Protection Features": "Overcharge, Over-discharge, Overcurrent, Short Circuit, Temperature"
      },
      "general": {
        "Operating Temperature": "Charge: 0°C to +55°C / Discharge: –20°C to +55°C",
        "Storage Temperature": "–20°C to +60°C",
        "IP Rating": "IP65",
        "Dimensions": "442 × 420 × 132",
        "Weight": "~45 kg"
      }
    }
  },
  {
    "id": "goodwe-6kw-single-phase-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "GoodWe",
    "name": "Goodwe 6KW Single Phase Hybrid Solar Inverter",
    "title": "Goodwe 6KW Single Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 215000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_9586143e-271a-46b8-b6cb-62ac386f4205.png?v=1758455346",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "GoodWe ES Uniq 6kW LCD Hybrid Inverter Type: Hybrid Power Output: 6000W (6kW) Brand: GoodWe Model: ES Uniq 6kW LCD",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "GoodWe",
        "Model": "Solar Inverter",
        "Rated Power": "6 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "goodwe-8kw-three-hybrid-phase-solar-inverter",
    "category": "solar-inverters",
    "brand": "GoodWe",
    "name": "Goodwe 8KW Single Phase Hybrid Solar Inverter",
    "title": "Goodwe 8KW Single Phase Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "8 kW",
    "price": 315000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IMG-3834.png?v=1758195521",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "8 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 8 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "GoodWe 8kW Hybrid Inverter (Single Phase) The GoodWe GW8600-EHB is an 8.6kW single-phase hybrid inverter built for South African homes with growing energy storage needs. Featuring 4 MPPTs , 50A battery charge/discharge current , and &lt;10ms UPS-level switching , it ensures maximum solar yield and reliable backup power.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "GoodWe",
        "Model": "Solar Inverter",
        "Rated Power": "8 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "8 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "xenon-ip65-12kw-pv18000-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Xenon IP65 12KW PV18000 Hybrid Solar Inverter",
    "title": "Knox Xenon IP65 12KW PV18000 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "12 kW",
    "price": 525000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/XENONIP6512KWPV18000HybridSolarInverter.png?v=1752317014",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "12 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 12 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox Xenon IP65 | 12kW PV18000 Hybrid Solar Inverter Rugged, Battery-Optional Inverter for Commercial &amp; Residential Solar Systems Designed to perform in harsh weather with IP65 protection, the Knox Xenon 12kW PV18000 is a powerful hybrid inverter supporting high-efficiency solar usage, smart energy control, and scalable installation. Ideal for three-phase setups.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "12 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "12 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "knox-krypton-eco-5000-4-2kw-24v-pv5000",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Krypton ECO-5000 4.2KW Solar Inverter",
    "title": "Knox Krypton ECO-5000 4.2KW Solar Inverter",
    "model": "Solar Inverter",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "4.2 kW",
    "price": 97000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/KNOXKryptonECO-50004.2kW-24VDCmaxpV5000wattbatterylessoperationGenuineVoltronicPowerTaiwan.png?v=1752302189",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "4.2 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 4.2 kW",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 48V DC"
    ],
    "detailedDescription": "Knox Krypton Eco 5000 | 4.2kW Hybrid Solar Inverter (24VDC) Smart Hybrid Inverter with Batteryless Operation &amp; Dual Output The Knox Krypton Eco 5000 is a 4.2kW smart hybrid solar inverter designed for modern solar systems. With support for batteryless operation, advanced MPPT solar control, dual AC output, and intelligent energy management, it’s ideal for homes and small businesses seeking reliable solar power with or without batteries.",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "4.2 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "4.2 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "inverex-nitrox-10kw-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Inverex",
    "name": "Inverex Nitrox 10KW Hybrid Solar Inverter",
    "title": "Inverex Nitrox 10KW Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "10 kW",
    "price": 460000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_1_155e42ca-66ba-4c7e-9868-5f8b6633ec15.png?v=1752058053",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Inverex NitroX 10KW SP Hybrid Inverter High-Performance Hybrid Inverter for Advanced Solar Systems The Inverex NitroX 10KW SP Hybrid Inverter is designed for serious energy users looking to maximize their solar investment. Built with robust components and smart energy management",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Inverex",
        "Model": "Solar Inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "knox-40kw-g2-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox 40.5KW G4 Pro Ongrid Solar Inverter",
    "title": "Knox 40.5KW G4 Pro Ongrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "40.5 kW",
    "price": 450000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_4_19f44575-70b1-40c4-80aa-7360a784df62.png?v=1752478809",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "40.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 40.5 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox G4 Pro 40.5K On-Grid Solar Inverter High-Efficiency | IP66 Rated | Commercial-Grade Performance",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "40.5 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "40.5 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "huawei-10kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Huawei",
    "name": "HUAWEI 10KW solar inverter ongrid",
    "title": "HUAWEI 10KW solar inverter ongrid",
    "model": "inverter ongrid",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10 kW",
    "price": 265000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_27.png?v=1737898387",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Residential homes with three-phase electricity .",
      "Small to medium-sized commercial solar setups.",
      "Rated power capacity of 10,000W (10kW) for system loads",
      "Supports 2 (Multi-String Optimization) independent MPPT tracking inputs",
      "Achieves peak conversion efficiency up to 98.65%",
      "Handles high solar input configurations up to 1100V"
    ],
    "detailedDescription": "The Huawei 10kW On-Grid Sun2000-10KTL-M0 solar inverter offers robust",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Huawei",
        "Model": "SUN2000-10KTL-M0",
        "Rated Power": "10,000W (10kW)",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10,000W (10kW)",
        "Maximum PV Input Voltage": "1100V",
        "Number of MPPTs": "2 (Multi-String Optimization)",
        "AC Output Voltage": "230Vac / 400Vac, 3W/N+PE",
        "AC Output Frequency": "50Hz / 60Hz",
        "Maximum Output Current": "13.6A",
        "Peak Efficiency": "98.65%"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter",
        "Anti-Islanding Protection": "Ensures safety by disconnecting from the grid in case of a power outage."
      },
      "protection": {
        "Reverse Polarity Protection": "Prevents damage from incorrect wiring."
      },
      "general": {
        "Monitoring": "Monitors the insulation of the system to prevent potential failures."
      }
    }
  },
  {
    "id": "huawei-15kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Huawei",
    "name": "HUAWEI 15KW solar inverter ongrid",
    "title": "HUAWEI 15KW solar inverter ongrid",
    "model": "inverter ongrid",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "15 kW",
    "price": 310000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_29.png?v=1737898387",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "15 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 15,000W (15kW) for system loads",
      "Supports 2 (Independent tracking for greater flexibility) independent MPPT tracking inputs",
      "Achieves peak conversion efficiency up to Up to 98.4% efficiency, ensuring maximum energy output."
    ],
    "detailedDescription": "The Huawei SUN2000-15KTL-M5 On-Grid Solar Inverter is a high-performance, 3-phase inverter designed to provide reliable solar power for residential and commercial setups. Here's a detailed overview of the product:",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Huawei",
        "Model": "SUN2000-15KTL-M5",
        "Rated Power": "15,000W (15kW)",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "15,000W (15kW)",
        "Number of MPPTs": "2 (Independent tracking for greater flexibility)",
        "Peak Efficiency": "Up to 98.4% efficiency, ensuring maximum energy output."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "IP Rating": "IP66 (dustproof and waterproof)"
      }
    }
  },
  {
    "id": "growatt-10kw-g3-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Growatt",
    "name": "Growatt 10KW G3 OnGrid Solar Inverter",
    "title": "Growatt 10KW G3 OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10 kW",
    "price": 170000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_1_3fa2b859-ac66-452e-85f2-c200b17361d8.png?v=1755415300",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "Growatt MOD 10KTL3-XH (BP) – 10kW Three-Phase On-Grid Inverter The Growatt MOD 10KTL3-XH (BP) is a battery-ready and backup-capable 10kW three-phase inverter , designed to maximize solar efficiency while ensuring energy security. With dual MPPT trackers, high conversion efficiency, and integrated active arcing protection, it is engineered for reliable residential and small commercial solar systems.",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Growatt",
        "Model": "Solar Inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "MPPT Voltage Range": "140V – 1000V",
        "Maximum Output Current": "16.7A",
        "Peak Efficiency": "98.2% peak",
        "MPPT Efficiency": "99.9%"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "battery": {
        "Battery Voltage Range": "600V – 950V",
        "Battery Compatibility": "APX HV Battery (5–30kWh)"
      },
      "general": {
        "Display": "OLED + LED / WiFi + App",
        "Monitoring": "OLED + LED / WiFi + App",
        "IP Rating": "IP66",
        "Dimensions": "425 × 387 × 178 mm",
        "Weight": "14 kg"
      }
    }
  },
  {
    "id": "growatt-10kw-ip65-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Growatt",
    "name": "Growatt 10KW IP65 Hybrid Solar Inverter",
    "title": "Growatt 10KW IP65 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "10 kW",
    "price": 380000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Growatt10KWIP65HybridSolarInverter.png?v=1755755771",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Growatt SPH 10000TL-HU Hybrid Inverter (Single Phase)",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Growatt",
        "Model": "Solar Inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "goodwe-125kw-ip66-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "GoodWe",
    "name": "Goodwe 125KW IP66 OnGrid Solar Inverter",
    "title": "Goodwe 125KW IP66 OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "125 kW",
    "price": 1010000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Goodwe125KWIP66OnGridSolarInverter.png?v=1753525577",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "125 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 125 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "GoodWe GW125K-GT – 125kW 3-Phase String Inverter A high-efficiency inverter tailored for commercial &amp; industrial solar projects.",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "GoodWe",
        "Model": "Solar Inverter",
        "Rated Power": "125 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "125 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "knox-6-2kw-ip-21-pv6600-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Krypton Eco 6.2KW IP-21 PV6600 Hybrid Solar Inverter",
    "title": "Knox Krypton Eco 6.2KW IP-21 PV6600 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6.2 kW",
    "price": 111000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6.2KWIP-21PV6600HybridSolarInverter.png?v=1753608457",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6600W / 6600VA for system loads",
      "Achieves peak conversion efficiency up to 93%"
    ],
    "detailedDescription": "Knox Krypton Eco 6600 – 6.2kW Hybrid Solar Inverter The Knox Krypton Eco 6600 is a smart, next-generation hybrid solar inverter designed to power homes and small businesses in Pakistan with maximum efficiency, advanced energy management, and batteryless operation capability. Featuring a pure sine wave output , grid-feed support , and intelligent dual output management , this inverter ensures uninterrupted power for critical loads and flexibility for expansion. With a rated output of 6.2kW , built-in WiFi , and BMS compatibility , it offers an ideal balance of performance, protection, and ease of use—making it a top choice for modern solar installations. 🌟 Top",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Krypton Eco 6600",
        "Rated Power": "6600W / 6600VA",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6600W / 6600VA",
        "Peak Efficiency": "93%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Voltage Range": "48VDC",
        "Maximum Charging Current": "100A (80A Solar + 80A AC Input)"
      },
      "general": {
        "Dimensions": "115 × 300 × 435",
        "Weight": "10.4 kg"
      }
    }
  },
  {
    "id": "knox-30kw-g4-pro-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox 30KW G4 Pro OnGrid Solar Inverter",
    "title": "Knox 30KW G4 Pro OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "30 kW",
    "price": 310000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox_6KW_pv8000_Hybrid_13.png?v=1748837134",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "30 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "25°C to +60°C",
      "25��C to +60°C",
      "Rated power capacity of 30 kW for system loads",
      "Achieves peak conversion efficiency up to 98.6% (Max), 98.3% (European)",
      "Handles high solar input configurations up to 1100 V"
    ],
    "detailedDescription": "Knox G4 Pro 30kW – High-Performance Three-Phase Solar Inverter The Knox G4 Pro 30kW is a powerful, reliable, and user-friendly three-phase inverter, designed to deliver maximum solar energy performance for commercial and industrial applications. With 150% PV array oversizing , wide MPP voltage range (150V–1000V) , and an IP66-rated enclosure , it’s built to handle demanding conditions both indoors and outdoors. Its smart commissioning via the Ai Solar App , ShadeSol optimization , and international certifications ensure you get top-tier energy yields, even under partial shading or non-ideal conditions. ⚙️ Key",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "30 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "30 kW",
        "Maximum PV Input Voltage": "1100 V",
        "Maximum Short-Circuit Current": "50 A / 25 A / 50 A",
        "AC Output Frequency": "50 Hz / 45–55 Hz",
        "Rated Output Current": "43.5 A",
        "Maximum Output Current": "47.8 A",
        "Peak Efficiency": "98.6% (Max), 98.3% (European)"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter",
        "Grid Frequency Range": "50 Hz / 45–55 Hz"
      },
      "general": {
        "Operating Temperature": "-25��C to +60°C",
        "IP Rating": "IP66",
        "Dimensions": "488 x 425.5 x 179 mm",
        "Weight": "20 kg"
      }
    }
  },
  {
    "id": "knox-xenon-ip65-15kw-pv22500-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Xenon IP65 15KW PV22500 Hybrid Solar Inverter",
    "title": "Knox Xenon IP65 15KW PV22500 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "15 kW",
    "price": 730000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/IP6515KWPV22500Hybrid.png?v=1752384640",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "15 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 15 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox Xenon 22500 | 15kW Hybrid Solar Inverter Smart, Durable, and High-Capacity Solar Inverter for Demanding Power Setups",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "15 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "15 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "knox-krypton-11-5kw-pv15002-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Krypton 11.5kw PV15002 IP21 Hybrid Solar Inverter",
    "title": "Knox Krypton 11.5kw PV15002 IP21 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "11.5 kW",
    "price": 280000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_1_f0bf3753-8900-43be-9180-87403f20db31.png?v=1752303318",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "11.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 11.5 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox Krypton 15002 | 11.5kW Hybrid Solar Inverter High-Capacity, Smart-Controlled Inverter for Home &amp; Commercial Solar Systems The Knox Krypton 15002 is a premium 11.5kW hybrid inverter built for larger homes and commercial energy systems. With intelligent load management, wide PV compatibility, and complete battery-independent operation, it’s an ideal solution for those looking to maximize solar efficiency and energy independence in Pakistan’s demanding power conditions.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "11.5 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "11.5 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "knox-krypton-13002-10kw-ip21-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Krypton 10kw PV13002 IP21 Hybrid Solar Inverter",
    "title": "Knox Krypton 10kw PV13002 IP21 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "10 kW",
    "price": 265000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_31cdca7c-eedc-4956-9198-6bad11be817a.png?v=1752303078",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox Krypton 13002 | 10kW Hybrid Solar Inverter High-Performance Smart Inverter with Dual MPPT &amp; Load Prioritization The Knox Krypton 13002 is a 10kW hybrid solar inverter designed for high-demand residential and commercial energy systems. With intelligent load management, dual MPPT input, and full remote monitoring via Wi-Fi, it delivers powerful, flexible energy control. Its RGB lighting, wide PV input, and battery-independent operation make it a future-proof solution for clean energy users.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "knox-krypton-8-5kw-pv12002",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Krypton 8.5kw PV12002 IP21 Hybrid Solar Inverter",
    "title": "Knox Krypton 8.5kw PV12002 IP21 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "8.5 kW",
    "price": 250000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/KNOXKrypton12002RGB8.5kwpV12000watt.png?v=1752302781",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "8.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 8.5 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox Krypton 12002 | 8.5kW Hybrid Solar Inverter High-Power Smart Inverter with Dual MPPT &amp; Intelligent Load Control The Knox Krypton 12002 is a next-generation 8.5kW hybrid solar inverter built for large homes and commercial spaces. With dual MPPT, advanced energy control, and real-time smart",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "8.5 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "8.5 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "knox-power-wall-6-1-51-2v-100ah-ip20-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Power Wall 6.1 - 51.2V 100AH IP20 Lithium Battery",
    "title": "Knox Power Wall 6.1 - 51.2V 100AH IP20 Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "0.20 kWh",
    "price": 240000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/KnoxPowerWall6.1-51.2V100AHIP20.png?v=1752300557",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "0.20 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 0.20 kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "Knox Power Wall 6.1-IP20 | 51.2V 100Ah Lithium-ion Battery Wall-Mounted Smart Battery for Residential Energy Storage The Knox Power Wall 6.1-IP20 is a compact lithium-ion battery engineered for residential and commercial energy storage systems. Delivering a usable capacity of 5.12kWh, it’s ideal for solar backup and energy optimization in indoor environments. Built with LiFePO₄ prismatic cells, this battery provides excellent thermal stability, extended cycle life, and maintenance-free operation. Its smart Battery Management System (BMS), multiple communication protocols, and parallel expandability make it a future-ready storage solution for clean energy setups.",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "0.20 kWh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "0.20 kWh",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "knox-rackwall-8-51-2v-150amp-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Rackwall 8 51.2V 150AMP Lithium Battery",
    "title": "Knox Rackwall 8 51.2V 150AMP Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "6 kW",
    "price": 370000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_8_65bd897e-f45b-4456-8b4b-c8d89389397a.png?v=1752061149",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "6 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 150Ah",
      "Long lifespan supporting over &gt;6000 cycles (90% DoD @ 25°C) lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Rackwall 8 | LIO 8.0-IP20 Lithium-ion Battery 51.2V | 150Ah | 7.68kWh | LiFePO₄ | Rack-Mounted Energy Storage The LIO 8.0-IP20 is a high-performance lithium-ion battery tailored for advanced energy storage applications. Designed with A-grade prismatic LiFePO₄ cells , it ensures outstanding safety, reliability, and long-term durability with over 6000 cycles at 90% depth of discharge. Engineered for scalability, this unit supports parallel connection of up to 15 units , delivering flexibility for expanding energy needs. The standard 19\" rack-mount design , touchscreen LCD , and RS485/CAN communication make it ideal for integration with major hybrid and off-grid inverters. Whether for residential, commercial, or industrial energy storage, this battery offers a dependable solution with rich BMS",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "LIO 8.0-IP20",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "6 kW",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "150Ah",
        "Charge Voltage": "55.2V – 57.6V",
        "Cycle Life": "&gt;6000 cycles (90% DoD @ 25°C)"
      },
      "batteryManagement": {
        "Communication": "RS485, CAN"
      },
      "general": {
        "Operating Temperature": "Charge: 0°C – 55°C",
        "Dimensions": "442 × 520 × 175 mm",
        "Weight": "65.0 kg"
      }
    }
  },
  {
    "id": "knox-powerwall-3-1-25-6v-100ah-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Powerwall 3.1 25.6V 100Ah Lithium Battery",
    "title": "Knox Powerwall 3.1 25.6V 100Ah Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "0.60 kWh",
    "price": 134000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_12_46c849cb-5299-4cb5-9e75-f547a1d8df7a.png?v=1752062489",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "0.60 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100Ah",
      "Long lifespan supporting over &gt;6000 (80% DoD @ 25°C) lifecycles",
      "Stable nominal DC voltage output of 25.6V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Powerwall 3.1 | LIO 2.66-IP20 Lithium-ion Battery 25.6V 100Ah | 2.56kWh | LiFePO₄ | Wall-Mounted Energy Storage The LIO 2.66-IP20 is a compact and reliable lithium-ion battery designed for small-scale energy storage systems. Built with A-grade prismatic LiFePO₄ cells , this unit offers exceptional safety, high cycle life, and robust protection for both charge and discharge operations. Ideal for backup power, hybrid systems, and small off-grid setups, it",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "LIO 2.66-IP20",
        "Battery Type": "LiFePO₄",
        "Nominal Energy": "0.60 kWh",
        "Nominal Voltage": "25.6V"
      },
      "electrical": {
        "Nominal Capacity": "100Ah",
        "Charge Voltage": "27.6V – 28.8V",
        "Cycle Life": "&gt;6000 (80% DoD @ 25°C)"
      },
      "batteryManagement": {
        "Communication": "RS485, CAN"
      },
      "general": {
        "IP Rating": "IP20",
        "Dimensions": "395 × 470 × 160 mm",
        "Weight": "28.0 kg"
      }
    }
  },
  {
    "id": "knox-powerwall-6-0-51-2v-100amp-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Powerwall 6.0 51.2V-100AMP LED Model Lithium Battery",
    "title": "Knox Powerwall 6.0 51.2V-100AMP LED Model Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 222000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Powerwall6.051.2V-100AH.png?v=1775473673",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100Ah",
      "Long lifespan supporting over &gt;6000 (80% DoD @ 25°C, 0.5C) lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Powerwall 6.0 | LIO 5.20-IP20 Lithium-ion Battery LED Model 51.2V 100Ah | 5.12kWh | LiFePO₄ | Wall-Mounted Energy Storage The LIO 5.20-IP20 is a high-performance lithium-ion battery designed for residential and small commercial energy storage systems. With A-grade prismatic LiFePO₄ cells and a robust design, it ensures long life, superior safety, and consistent output. This wall-mounted battery offers 5.12kWh of energy, supports up to 8 units in parallel , and is ideal for on-grid, off-grid, and hybrid setups. A smart BMS with multiple protections, LCD display, and universal communication protocols (RS485/RS232/CAN) makes integration with various inverters smooth and reliable. It's engineered for easy installation, silent operation, and dependable energy performance across a wide range of environmental conditions.",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "LIO 5.20-IP20",
        "Battery Type": "LiFePO₄",
        "Nominal Energy": "5.12 kWh",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "100Ah",
        "Recommended Discharge Current": "100A",
        "Charge Voltage": "57.6V",
        "Cycle Life": "&gt;6000 (80% DoD @ 25°C, 0.5C)",
        "Depth of Discharge": "80%"
      },
      "batteryManagement": {
        "Communication": "RS485, RS232, CAN"
      },
      "general": {
        "Dimensions": "533 × 500 × 150 mm",
        "Weight": "45.1 ± 0.5 kg"
      }
    }
  },
  {
    "id": "knox-rackwall-10-5-51-2v-200amp-lithium-battery",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Rackwall 10.5 51.2v 200AMP Lithium Battery",
    "title": "Knox Rackwall 10.5 51.2v 200AMP Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "6 kW",
    "price": 475000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_5_0114f5e7-1d34-4854-9824-e95a3889c224.png?v=1752058646",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "6 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 200Ah",
      "Long lifespan supporting over &gt;6000 cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "LIO 10.5-IP20 | 51.2V 200Ah Lithium-ion Battery High-Capacity, Rack-Mount Battery for Energy Storage Systems The LIO 10.5-IP20 is a robust, rack-mounted lithium-ion battery designed for advanced energy storage needs in residential and commercial solar systems. With a total capacity of 10.24kWh, this low-voltage battery uses long-life prismatic LiFePO₄ cells to ensure safety, scalability, and long-term performance. Engineered with an intelligent Battery Management System (BMS), it supports independent protection for charging and discharging, seamless communication with leading inverter brands, and parallel expansion of up to 15 sets. Its standard 19” rack size and plug-and-play design make it simple to install and maintain, while its wide operating temperature range allows reliable operation even in harsh environments.",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "LIO 10.5-IP20",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "6 kW",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "200Ah",
        "Charge Voltage": "48V",
        "Discharge Voltage": "48V",
        "Cycle Life": "&gt;6000 cycles"
      },
      "batteryManagement": {
        "Communication": "RS485, CAN, LINK-IN, LINK-OUT"
      },
      "general": {
        "IP Rating": "OVP, LVP, OCP, OTP, LTP, Short-circuit",
        "Dimensions": "442 × 550 × 250 mm",
        "Weight": "83 kg"
      }
    }
  },
  {
    "id": "coretech-24v-2-5kw-100amp-lithuim-battery-1",
    "category": "lithium-batteries",
    "brand": "Coretech",
    "name": "CoreTech 24v (2.5KW) 100Amp Lithium Battery",
    "title": "CoreTech 24v (2.5KW) 100Amp Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "2.5 kW",
    "price": 133000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/CoreTech24v100AmpLithuimBattery_0dd4a2f9-e8ea-4a95-b8f1-81bd29554f01.png?v=1751439205",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "2.5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "A grade brand new prismatic LiFePO4 cells",
      "6000 cycles @80% DOD (25℃, 0.5C)",
      "Over charge, over discharge, over temperature, low temperature, over current and short circuit protection",
      "LCD display screen to monitor cell SOC, voltage, temperature and alarm status",
      "Cell balance function",
      "Metal case for excellent heat dissipation and enhanced safety"
    ],
    "detailedDescription": "Coretech 24V 100A Lithium Battery with 6000 Lifecycles ready Stock available at Kamal Solar House Multan | Compatible with most Solar Inverters in Pakistan like Solis Growatt Voltronic Solar Inverters #kamalsolarhouse #solarpanel #solarpanels #solarinverter #lithiumbattery #coretech #coretechlithiumbattery ES-BOX36S LiFePO4 Battery • A grade brand new prismatic LiFePO4 cells • 6000 cycles @80% DOD (25℃, 0.5C) • Over charge, over discharge, over temperature, low temperature, over current and short circuit protection • LCD display screen to monitor cell SOC, voltage, temperature and alarm status • Cell balance function • Metal case for excellent heat dissipation and enhanced safety • Max 2 battery packs in series • Max 16 battery packs in parallel • Communication Port: USB/RS232, RS485, CAN • Many inverters can be compatible • Work Temperature: Charge 0 50℃, Discharge -20 65℃, Storage -20~45℃ • Recommended to charge every 3 months if not in use Technical Details: Energy: 2.5kWh Rated Voltage: 25.4V Capacity: 100Ah Max Charge Current: 100A Max Discharge Current: 100A",
    "technicalDetails": {
      "overview": {
        "Brand": "Coretech",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "2.5 kW",
        "Nominal Voltage": "48V DC"
      },
      "electrical": {
        "Nominal Capacity": "2.5 kW",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "knox-24v-100amp-lithuim-battery-powerwall-3-0",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Powerwall 3.0 25.6v 100Amp Lithuim Battery",
    "title": "Knox Powerwall 3.0 25.6v 100Amp Lithuim Battery",
    "model": "Lithuim Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5.12 kWh",
    "price": 127000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Powerwall3.025.6v100A.png?v=1762176444",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "48V DC",
      "Capacity": "5.12 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 100Ah",
      "Long lifespan supporting over &gt;6000 cycles @ 80% DOD lifecycles",
      "Stable nominal DC voltage output of 25.6V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Knox 24V 100A Lithium Battery Ready Stock Available At Kamal Solar House | Best Lithium battery for 3 kW and 4 kW inverter or even this battery is used for 48V inverter Knox Powerwall 3.0 LIO 2.56-IP20 – Advanced LiFePO4 Lithium Battery Model: LIO 2.56-IP20 Type: Wall-Mounted Lithium Iron Phosphate (LiFePO4) Battery Capacity: 2.56kWh | 25.6V | 100Ah Grade: A-Grade Prismatic Cells Overview The Knox Powerwall 3.0 LIO 2.56-IP20 is a next-generation wall-mounted lithium battery built using premium-grade prismatic LiFePO4 cells . Designed for residential solar systems, backup applications , and hybrid inverters , this unit ensures maximum safety, lifespan, and performance . With over 6000 cycles at 80% DOD , built-in BMS, and an informative LCD display , it delivers consistent power with minimal maintenance.",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "LIO 2.56-IP20",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "5.12 kWh",
        "Nominal Voltage": "25.6V"
      },
      "electrical": {
        "Nominal Capacity": "100Ah",
        "Charge Voltage": "28.8V",
        "Cycle Life": "&gt;6000 cycles @ 80% DOD"
      },
      "batteryManagement": {
        "Communication": "RS485"
      },
      "general": {
        "Operating Temperature": "Charge: 0°C 55°C / Discharge: -20°C 60°C",
        "IP Rating": "IP20",
        "Dimensions": "350 x 180 x 450",
        "Weight": "25.1 ± 0.5 kg"
      }
    }
  },
  {
    "id": "livoltek-lithium-battery-ip21-5kw-100amp",
    "category": "lithium-batteries",
    "brand": "Livoltek",
    "name": "Livoltek Lithium Battery – IP21 5kW 51.2v 100AMP",
    "title": "Livoltek Lithium Battery – IP21 5kW 51.2v 100AMP",
    "model": "51.2v 100AMP",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "5 kW",
    "price": 208000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_ba3e8a01-95f8-4620-b9b1-3c2f11e7bafb.png?v=1752067309",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "5 kW",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 5 kW",
      "Long lifespan supporting over &gt;6000 cycles @ 25°C, 80% DoD lifecycles",
      "Stable nominal DC voltage output of 51.2V",
      "Integrated PACE/intelligent BMS cell balancing controllers"
    ],
    "detailedDescription": "Livoltek 5kWh Low Voltage Lithium Battery – Reliable Power Storage for Solar Systems Overview The Livoltek 5kWh Low Voltage Lithium Battery (51.2V 100Ah) is designed for residential and small-scale commercial solar systems , delivering high-performance energy storage with safety, efficiency, and longevity. Built on LiFePO₄ (LFP) technology , this battery ensures stable output , natural cooling , and deep cycle durability , making it the ideal choice for hybrid and off-grid systems . Its natural cooling design eliminates the need for active cooling systems, reducing maintenance and increasing efficiency in Pakistan’s diverse climate conditions .",
    "technicalDetails": {
      "overview": {
        "Brand": "Livoltek",
        "Model": "51.2v 100AMP",
        "Battery Type": "LiFePO₄ (LFP)",
        "Nominal Energy": "5 kW",
        "Nominal Voltage": "51.2V"
      },
      "electrical": {
        "Nominal Capacity": "5 kW",
        "Cycle Life": "&gt;6000 cycles @ 25°C, 80% DoD"
      },
      "batteryManagement": {
        "Communication": "CAN / RS485 (Optional)"
      },
      "general": {
        "Operating Temperature": "-10°C to +55°C"
      }
    }
  },
  {
    "id": "fox-20kw-on-grid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Fox",
    "name": "Fox 20KW On Grid Solar Inverter",
    "title": "Fox 20KW On Grid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "20 kW",
    "price": 280000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Fox20KWOnGrid_15602b9f-fb79-4dd3-ac93-7534fe531706.png?v=1750930989",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "20 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 20 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Handles high solar input configurations up to 1100V",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "FOX 20kW On-Grid Solar Inverter Harness Maximum Energy with FOX 20kW Grid-Tied Inverter The Fox 20kW On-Grid Solar Inverter is engineered for medium to large solar installations requiring maximum efficiency , high voltage compatibility , and scalable design . With a maximum DC input of 30,000W , this inverter efficiently handles large solar arrays and is perfect for residential, commercial, or industrial-grade setups. It",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Fox",
        "Model": "Solar Inverter",
        "Rated Power": "20 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "20 kW",
        "Maximum PV Input Voltage": "1100V",
        "MPPT Voltage Range": "140 – 1000V",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Display": "App / LCD / Web",
        "Monitoring": "App / LCD / Web",
        "IP Rating": "IP65"
      }
    }
  },
  {
    "id": "livoltek-25kw-on-grid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Livoltek",
    "name": "Livoltek 25KW On Grid Solar Inverter",
    "title": "Livoltek 25KW On Grid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "25 kW",
    "price": 250000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/LIVOLTEK25KWOnGrid.png?v=1750926932",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "25 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 25 kW for system loads",
      "Achieves peak conversion efficiency up to Up to 98%",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "Livoltek 25kW Three Phase Grid-Tied Inverter High-Efficiency Commercial Solar Inverter for Rooftop Installations The Livoltek 25kW Three Phase Grid-Tied Inverter is engineered for commercial and industrial solar energy systems . Whether it's a rooftop for a factory, commercial building, school, or a large-scale project, this inverter ensures maximum power output , even in partial shade conditions . With dual MPPTs , 150% DC oversizing , and 110% AC overloading , it delivers unmatched performance and reliability .",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Livoltek",
        "Model": "GT3-25KD1R11007",
        "Rated Power": "25 kW",
        "Phase": "Single Phase",
        "Application": "Rooftop Commercial / Industrial Systems"
      },
      "technicalSpecifications": {
        "Rated Output Power": "25 kW",
        "Peak Efficiency": "Up to 98%"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Monitoring": "Bluetooth / WiFi App"
      }
    }
  },
  {
    "id": "growatt-33kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Growatt",
    "name": "Growatt 33KW OnGrid Solar Inverter",
    "title": "Growatt 33KW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "33 kW",
    "price": 400000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/GrowattOngrid33KW.png?v=1750849536",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "33 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "High Efficiency (up to 98.8%) Optimized energy conversion for maximum output and savings.",
      "Dual MPPT Tracking Independently tracks power from two solar arrays to enhance efficiency.",
      "Smart Grid Compatibility Supports net metering to export excess energy back to the utility grid.",
      "Advanced Connectivity Remote monitoring and data tracking via WiFi, RS485, and Modbus protocols.",
      "Robust Protection (IP65 Rated) Weather-resistant enclosure ensures safe outdoor operation.",
      "Three-Phase AC Output (400V) Ideal for industrial and large commercial setups."
    ],
    "detailedDescription": "Growatt 33kW Ongrid Inverter The Growatt 33kW Ongrid Inverter is a high-performance, grid-tied solution designed for commercial and industrial-scale solar systems . With a maximum efficiency of up to 98.8% , dual MPPT tracking , and smart monitoring",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Growatt",
        "Model": "Growatt 33kW Ongrid Inverter",
        "Rated Power": "33,000W",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "33,000W",
        "Number of MPPTs": "Dual MPPT",
        "AC Output Voltage": "400V (Three-Phase)",
        "Peak Efficiency": "Up to 98.8%"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "IP Rating": "IP65 (Dust & Water Resistant)"
      }
    }
  },
  {
    "id": "crown-elego-star-6-5kw-hybrid",
    "category": "solar-inverters",
    "brand": "Crown",
    "name": "Crown Elego Star 6.5KW Hybrid Solar Inverter",
    "title": "Crown Elego Star 6.5KW Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6.5 kW",
    "price": 160000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/CrownElegoStar6.5KW.png?v=1750849075",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Pure Sine Wave MPPT Inverter Ensures smooth, stable power for sensitive appliances and electronics.",
      "9600W PV Input Capacity Supports higher solar array sizes for better performance.",
      "Dual MPPT Input Optimizes two independent PV arrays for maximum yield.",
      "Built-in Wi-Fi & BMS Real-time system monitoring and battery management.",
      "Supports Parallel Operation Automatically assigns a master unit in multi-inverter setups (up to 16 units).",
      "Touch Screen Display Intuitive control and monitoring via modern interface."
    ],
    "detailedDescription": "Elego Star 6.5KW Hybrid Inverter The Elego Star 6.5KW is a next-generation pure sine wave hybrid solar inverter designed to deliver high performance, advanced monitoring, and intelligent energy distribution. With a powerful MPPT-based dual-array optimization , built-in Wi-Fi, and seamless off-grid switching, this inverter is ideal for smart residential and light commercial solar setups. It supports parallel operation of up to 16 units , allowing easy expansion for larger energy systems. Its integrated BMS, touch screen interface , and self-consumption/feed-in capabilities make it a comprehensive solar energy solution for the modern world. 🌟",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Crown",
        "Model": "Solar Inverter",
        "Rated Power": "6.5KW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6.5KW",
        "Maximum PV Input Power": "9600W",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "general": {
        "Display": "Touch Screen",
        "Monitoring": "Built-in Wi-Fi (Mobile App Support)"
      }
    }
  },
  {
    "id": "solis-30kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 30KW OnGrid Solar Inverter",
    "title": "Solis 30KW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "30 kW",
    "price": 400000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/SolisOnGrid30KW.png?v=1750844853",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "30 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Maximum Efficiency of 98.8% Delivers industry-leading energy conversion for maximum output and ROI.",
      "Wide MPPT Voltage Range (200V – 800V) Compatible with a broad range of PV modules; ideal for complex installations.",
      "4 MPPT Trackers Independent tracking for improved system efficiency and reduced mismatch losses.",
      "Ultra-Low Startup Voltage Starts operation early in the day and maximizes daily energy yield.",
      "Advanced Monitoring & Connectivity Equipped with RS485 and optional WiFi, LAN, and GPRS interfaces for remote access.",
      "Large 7.0\" LCD Color Display Easy-to-read interface for live monitoring and status updates."
    ],
    "detailedDescription": "Solis 30kW Wi-Fi 3 Phase On-Grid Solar Inverter The Solis 30kW Wi-Fi 3P On-Grid Solar Inverter is a top-tier solution from the Solis Three Phase Series, designed to deliver ultra-high efficiency and advanced performance for commercial and industrial-scale solar systems. With a maximum efficiency of 98.8% , four MPPT trackers , and seamless remote monitoring via WiFi, LAN, or GPRS, this inverter is built to optimize every watt of solar power. Built with an IP65-rated enclosure and equipped with anti-resonance technology, the inverter is both durable and scalable—supporting parallel installations of up to 6MW+. Its wide MPPT voltage range allows flexible PV array configurations, while a large 7.0-inch LCD color screen provides real-time performance data at a glance. 🔋",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Solar Inverter",
        "Brand": "Solis",
        "Model": "Solar Inverter",
        "Rated Power": "30 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "30 kW",
        "Maximum PV Input Power": "≥30kW",
        "MPPT Voltage Range": "200V – 800V",
        "Number of MPPTs": "4",
        "Peak Efficiency": "Up to 98.8%"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Display": "7.0\" LCD Color Screen"
      }
    }
  },
  {
    "id": "solis-15kw-ip66-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 15KW IP66 Hybrid Solar Inverter",
    "title": "Solis 15KW IP66 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "15 kW",
    "price": 635000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/SolisHybrid15KWIP66LPlus.png?v=1750844259",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "15 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "High Efficiency up to 97% Optimizes solar energy conversion to reduce operational costs and maximize output.",
      "Wide MPPT Voltage Range (200V–800V) Offers flexibility to work efficiently with different PV module configurations.",
      "Dual MPPT Design Improves performance and minimizes harmonic distortion with accurate tracking algorithms.",
      "Short-circuit protection",
      "Surge protection",
      "Grid monitoring and temperature protection"
    ],
    "detailedDescription": "Solis 15kW 3 Phase LV Hybrid Solar Inverter The Solis 15kW 3 Phase LV Hybrid Solar Inverter is engineered to deliver powerful performance, high efficiency, and seamless integration for large-scale residential, commercial, and industrial solar systems. Its wide MPPT voltage range and advanced protection mechanisms make it a robust and reliable solution for modern energy needs. ⚙️",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Solar Inverter",
        "Brand": "Solis",
        "Model": "Solar Inverter",
        "Rated Power": "15kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "15kW",
        "Maximum PV Input Power": "18kW",
        "MPPT Voltage Range": "200V – 800V",
        "Number of MPPTs": "2",
        "Maximum PV Input Current": "20A",
        "Peak Efficiency": "Up to 97%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "general": {
        "IP Rating": "DC Reverse, Short Circuit, Surge"
      }
    }
  },
  {
    "id": "huawei-115kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Huawei",
    "name": "Huawei 115KW IP66 OnGrid Solar Inverter",
    "title": "Huawei 115KW IP66 OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "115 kW",
    "price": 1335000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/dsf.png?v=1753016620",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "115 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 115 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "The Huawei SUN2000-115KTL-M2 is a three-phase solar inverter , specifically designed for large-scale solar installations. Here’s a breakdown of its",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Huawei",
        "Model": "Solar Inverter",
        "Rated Power": "115 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "115 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "protection": {
        "Surge Protection": "Surge arresters for both DC and AC offer additional protection."
      },
      "general": {
        "Monitoring": "Features string-level management , smart I-V curve diagnosis , and MBUS support for seamless monitoring.",
        "Operating Temperature": "-25°C to +60°C .",
        "Dimensions": "1035 mm x 700 mm x 365 mm ."
      }
    }
  },
  {
    "id": "kamal-local-dasi-solar-inverter-7kw-10kw",
    "category": "solar-inverters",
    "brand": "Kamal Solar",
    "name": "Kamal Local Dasi Solar Inverter 7KW & 10KW",
    "title": "Kamal Local Dasi Solar Inverter 7KW & 10KW",
    "model": "& 10KW",
    "type": "Solar Inverter",
    "subtitle": "Solar Inverter",
    "capacity": "7 kW",
    "price": 40000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_16.png?v=1750251819",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Solar Inverter",
      "Capacity": "7 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 7 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Kamal Solar Local Inverter 7 KW and 10 KW ready stock available at Kamal Solar House, Multan | This Solar inverter runs only on Solar Panels without a battery and WAPDA | Low price Dasi solar inverter #kamalsolarhouse #localinverter #dasiinverter #solarinverter #solarpanels #solarsystem Advanced Off-Grid Local Dasi Solar Inverter – WAPDA Sharing, Daily Usage &amp; Production Tracking Upgrade your solar power system with this feature-rich Off-Grid Local Dasi Solar Inverter , built for efficient performance, smart load management, and real-time energy insights. ✅ Off-Grid Capability – Operates without grid dependency for true energy independence. ✅ Direct Solar Panel Operation – Connects and runs directly on solar panels, no batteries needed. ✅ WAPDA Sharing Option – Balances power between solar and WAPDA intelligently. ✅ Auto-Switch to WAPDA – Automatically converts to grid power during low solar availability. ✅ Warranty – Service-only warranty (no parts included). ✅ No Wi-Fi Needed – Simple setup, no internet or app required. ✅ Premium Digital Display – Easy-to-read screen with live system stats. ✅ Daily Solar Production Tracking – Shows how many units (kWh) were produced by the inverter each day. ✅ Daily Usage Monitoring – Displays how many units were consumed/used throughout the day. Ideal for users who want a clear understanding of their daily solar savings and electricity usage —perfect for homes, shops, and small businesses.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Solar Inverter",
        "Brand": "Kamal Solar",
        "Model": "& 10KW",
        "Rated Power": "7 kW",
        "Phase": "Single Phase",
        "Application": "Solar Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "7 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Solar Inverter"
      }
    }
  },
  {
    "id": "knox-krypton-6-5kw-pv9055-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Krypton 6.5kW PV9055 Hybrid Solar Inverter",
    "title": "Knox Krypton 6.5kW PV9055 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6.5 kW",
    "price": 165000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/KnoxKrypton6.5kWPV9055HybridSolarInverter.png?v=1753688748",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6500W for system loads",
      "Achieves peak conversion efficiency up to DC-AC: 93% / MPPT: 95%"
    ],
    "detailedDescription": "KNOX Krypton 9055 | 6.5kW Hybrid On-Grid Inverter with Energy Storage (Model: 6.5kW-48-PV9055-TWIN) Smart, Powerful &amp; Future-Ready Solar Inverter Take charge of your energy with the KNOX Krypton 9055 , a high-performance 6.5kW hybrid inverter designed for seamless integration with solar, grid, and energy storage systems. Equipped with dual MPPTs , smart load management , battery-less operation , and real-time mobile monitoring , this inverter is built to power homes, businesses, and industrial applications efficiently.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "6.5kW-48-PV9055-TWIN",
        "Rated Power": "6500W",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6500W",
        "Maximum PV Input Power": "4500W x 2",
        "Maximum PV Input Current": "2x22A",
        "AC Output Voltage": "220/230/240 VAC",
        "Peak Efficiency": "DC-AC: 93% / MPPT: 95%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "general": {
        "Dimensions": "140 x 295 x 468 mm",
        "Weight": "13.5 kg"
      }
    }
  },
  {
    "id": "knox-4-5kw-pv6500-solar-inverter-high-efficiency-hybrid-system",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox 4.5KW PV6500 Hybrid Solar Inverter",
    "title": "Knox 4.5KW PV6500 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "4.5 kW",
    "price": 119000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox4.5KWPV6500HybridSolarInverter.png?v=1753252867",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "4.5 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 4500W (4.5KW) for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Product Overview: The Knox 4.5KW PV6500 Hybrid Solar Inverter is the ultimate solution for reliable and efficient solar energy conversion. Equipped with advanced MPPT technology, it allows for seamless solar energy utilization, grid support, and battery backup in one sleek, high-tech unit. Whether you’re upgrading your home solar system or managing energy for a commercial setup, this inverter ensures smooth operation, optimal energy efficiency, and minimal electricity bills — all packed into a sleek, modern design.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Knox PV6500",
        "Rated Power": "4500W (4.5KW)",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "4500W (4.5KW)",
        "Peak Efficiency": "98.2% peak",
        "MPPT Efficiency": "Up to 98%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "general": {
        "Display": "LCD Touch Screen",
        "Weight": "Approx. 12-15kg"
      }
    }
  },
  {
    "id": "knox-4kw-pv6000-hybrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox 4KW PV6000 Hybrid Solar Inverter",
    "title": "Knox 4KW PV6000 Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "4 kW",
    "price": 111000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox4KWPV6000HybridSolarInverter.png?v=1753688451",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "4 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 4000W (4KW) for system loads",
      "Achieves peak conversion efficiency up to ≥ 98%",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "Introducing the Knox 4KW PV6000 Hybrid Inverter — a high-performance solar inverter built to provide stable, efficient, and clean energy for on-grid and off-grid applications. With its smart MPPT solar charge controller, stylish front LCD display, and compact vertical design, this inverter is perfect for modern energy-conscious users.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Knox PV6000",
        "Rated Power": "4000W (4KW)",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "4000W (4KW)",
        "AC Output Voltage": "230V AC ± 5%",
        "Peak Efficiency": "≥ 98%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Compatibility": "Lithium / Lead-Acid / AGM"
      },
      "general": {
        "Display": "Full-Color LCD Touch Screen",
        "Monitoring": "Optional",
        "Weight": "Approx. 13kg"
      }
    }
  },
  {
    "id": "krypton-9000-on-grid-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Krypton 6.2KW PV9000 HYBRID Solar Inverter",
    "title": "Knox Krypton 6.2KW PV9000 HYBRID Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6.2 kW",
    "price": 145000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6.2KWPV9000HYBRID.png?v=1753253614",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "10°C to 50°C",
      "15°C to 60°C",
      "Rated power capacity of 6200 W for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Knox Krypton 6.2KW PV9000 Hybrid Solar Inverter ready stock available at Kamal Solar House Multan | This solar inverter starts working earlier then other solar inverters #kamalsolarhouse #solarinverter #knoxsolar #solarinverters #solarenergy General",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "6200 W",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6200 W",
        "Maximum PV Input Power": "9000 W",
        "MPPT Voltage Range": "120 VDC – 430 VDC",
        "Maximum PV Input Current": "27 A (Max 40 A)",
        "Rated Output Current": "28.26 A",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Maximum Charging Current": "120 A"
      },
      "general": {
        "Operating Temperature": "-10°C to 50°C",
        "Dimensions": "138 x 320 x 550 mm",
        "Weight": "12 kg"
      }
    }
  },
  {
    "id": "knox-xerox-15kw-g4-pro-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox Xerox 15.2KW G4 Pro OnGrid Solar Inverter",
    "title": "Knox Xerox 15.2KW G4 Pro OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "15.2 kW",
    "price": 190000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_1_754c570f-5786-4817-96f2-75cfc095f86a.png?v=1752045033",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "15.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 15.2kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Handles high solar input configurations up to 450VDC"
    ],
    "detailedDescription": "Knox 15.2K G4 Pro – Advanced 3-Phase Hybrid Inverter The Knox 15.2K G4 Pro is a state-of-the-art hybrid inverter designed for high-performance solar applications. With a pure sine wave output , 6 MPPTs , and support for both on-grid and off-grid operations, it ensures flexible, stable, and intelligent energy management. Its built-in WiFi, GPRS capability, and parallel operation support make it a smart solution for future-ready solar systems. Key",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Knox 15.2K G4 Pro",
        "Rated Power": "15.2kW",
        "Phase": "3-Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "15.2kW",
        "Maximum PV Input Voltage": "450VDC",
        "MPPT Voltage Range": "90~450VDC",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "battery": {
        "Maximum Charging Current": "240A"
      },
      "general": {
        "Operating Temperature": "-10°C to 50°C",
        "Dimensions": "422 x 729 x 281 mm",
        "Weight": "43.5 kg"
      }
    }
  },
  {
    "id": "livoltek-10kw-ongrid-three-phase-solar-inverter",
    "category": "solar-inverters",
    "brand": "Livoltek",
    "name": "Livoltek 10KW OnGrid Three Phase Solar Inverter",
    "title": "Livoltek 10KW OnGrid Three Phase Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10 kW",
    "price": 130000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Livoltek10KWOnGridThreePhaseSolarInverter_39454ff8-f1d0-4b2d-8364-307164578a3f.png?v=1753249281",
    "specs": {
      "Phase": "3-Phase Output",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10KW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "Livoltek 10kW and 15kW on-grid solar inverters are available at kamalsolar.pk . Livoltek offers a variety of solar inverters, including on-grid, off-grid, and hybrid models, at lower prices than other solar companies. .pk Three Phase Grid-tied Inverter 10KW The LIVOLTEK GT3-10KDL1R11007 is a robust and efficient three-phase grid-tied inverter designed for residential and commercial applications. This inverter is part of the GT3 series, ranging from 4KW to 25KW, tailored for rooftop installations to maximize energy production. Its advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Livoltek",
        "Model": "GT3-10KDL1R11007",
        "Rated Power": "10KW",
        "Phase": "3-Phase Output",
        "Application": "Residential & Commercial Rooftops"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10KW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Monitoring": "Smart App"
      }
    }
  },
  {
    "id": "livoltek-6kw-solar-inverter-hybrid",
    "category": "solar-inverters",
    "brand": "Livoltek",
    "name": "Livoltek 6.2KW hybrid solar inverter",
    "title": "Livoltek 6.2KW hybrid solar inverter",
    "model": "solar inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6.2 kW",
    "price": 110000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/LIVOLTEK6.2KWsolarinverterhybrid.png?v=1751349951",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6.2 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6.2 kW for system loads",
      "Achieves peak conversion efficiency up to Up to 96%",
      "Handles high solar input configurations up to 500V",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "Livoltek GF1-6.2KD – 6.2kW Single Phase Off-Grid Hybrid Inverter (IP21) Model: GF1-6.2KD Type: Single Phase Off-Grid Hybrid Inverter Category: Inverters &gt; Hybrid &gt; Off-Grid Overview The Livoltek GF1-6.2KD 6.2kW Off-Grid Hybrid Inverter is a high-efficiency, smart inverter designed for homes, offices, and small commercial solar power systems in Pakistan. With up to 96% efficiency , intelligent battery management, and support for parallel operations , this inverter ensures uninterrupted power supply and optimal performance , even in areas with no grid connectivity. Perfect for use with or without batteries , this inverter can prioritize power from solar, utility, or battery , giving you full energy flexibility .",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Livoltek",
        "Model": "GF1-6.2KD",
        "Rated Power": "6.2 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6.2 kW",
        "Maximum PV Input Voltage": "500V",
        "Peak Efficiency": "Up to 96%"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "general": {
        "Monitoring": "Online and Offline",
        "IP Rating": "IP21",
        "Warranty": "Standard Manufacturer Warranty"
      }
    }
  },
  {
    "id": "solis-ongrid-three-phase-inverter-125kw",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 125KW 3 Phase OnGrid Solar Inverter",
    "title": "Solis 125KW 3 Phase OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "125 kW",
    "price": 1095000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Web1920_3.png?v=1739547601",
    "specs": {
      "Phase": "3-Phase Output",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "125 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 125 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Solis 125kW Three Phase On-Grid Solar Inverter The Solis 125kW Three Phase On-Grid Solar Inverter is a high-performance, reliable solution for large-scale commercial and industrial solar power systems. Engineered for maximum efficiency and safety, it boasts advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Solis",
        "Model": "Solar Inverter",
        "Rated Power": "125 kW",
        "Phase": "3-Phase Output",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "125 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "longi-horizon-225-watt-solar-panel-a-grade-12v",
    "category": "solar-panels",
    "brand": "LONGi",
    "name": "Longi Horizon 225 Watt Solar Panel A Grade 12V",
    "title": "Longi Horizon 225 Watt Solar Panel A Grade 12V",
    "model": "Grade 12V",
    "type": "Monocrystalline Panel",
    "subtitle": "Monocrystalline Panel",
    "capacity": "225W",
    "price": 12000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_2_1.png?v=1738082522",
    "specs": {
      "Technology": "Monocrystalline Perc",
      "Efficiency": "21.5% cell efficiency",
      "Class": "A-Grade High Power"
    },
    "features": [
      "10 LED bulbs",
      "1 x 150W air cooler + 4 bulbs",
      "What appliances can it power? It can power 4 x 45W fans, 10 LED bulbs, or 1 x 150W air cooler with 4 bulbs.",
      "How efficient is it? The 225W power output ensures high efficiency, making it ideal for off-grid living.",
      "Delivers maximum peak power output of 225W",
      "High module conversion efficiency of 21.5% cell efficiency"
    ],
    "detailedDescription": "Longi Horizon Solar Panel 225W: Your Trusted Off-Grid Companion The Longi Horizon Solar Panel 225W is a premium solar panel designed specifically for off-grid applications. With its efficient 225W power output, durable build, and compatibility with 12V systems, it provides reliable energy for essential appliances in areas without consistent grid power. Backed by a five-year warranty, this solar panel ensures peace of mind and sustainable energy independence.",
    "technicalDetails": {
      "overview": {
        "Brand": "LONGi",
        "Model": "Grade 12V",
        "Cell Type": "Monocrystalline Perc"
      },
      "electricalCharacteristics": {
        "Maximum Power (Pmax)": "225W",
        "Module Efficiency": "21.5% cell efficiency"
      },
      "mechanical": {
        "Dimensions": "1354 × 767 × 30mm",
        "Weight": "12.1 kg"
      },
      "general": {
        "Warranty": "Backed by a 5-year warranty , ensuring long-term reliability and support.",
        "Application": "Ideal for 12V systems and capable of powering multiple appliances, including: 4 x 45W fans"
      }
    }
  },
  {
    "id": "china-vfd-solar-pump",
    "category": "vfd-inverters",
    "brand": "Original China",
    "name": "Original China VFD Solar Inverter",
    "title": "Original China VFD Solar Inverter",
    "model": "Solar Inverter",
    "type": "Variable Frequency Drive",
    "subtitle": "Variable Frequency Drive",
    "capacity": "6 kW",
    "price": 27000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_1_5ead75e2-117f-465b-86d7-dbe843ccabf1.png?v=1737954491",
    "specs": {
      "Output Phase": "3-Phase AC Output",
      "Protection": "IP65 Water/Dustproof",
      "MPPT": "Integrated Dynamic MPPT"
    },
    "features": [
      "Equipped with overvoltage, short-circuit, and thermal management protections.",
      "Modular design supports easy scalability to meet diverse energy demands.",
      "Supports remote monitoring and control via mobile apps or web interfaces for enhanced convenience.",
      "Designed to drive VFD water pumps up to 6 kW"
    ],
    "detailedDescription": "Invt VFD Solar Inverters Optimizing Efficiency and Performance for Modern Solar Energy Systems The Invt VFD Solar Inverters are designed to maximize the efficiency and reliability of solar energy systems. These high-performance inverters convert the DC energy generated by solar panels into AC energy for household and commercial use. With their advanced",
    "technicalDetails": {
      "overview": {
        "Brand": "Original China",
        "Model": "Solar Inverter",
        "Application": "Suitable for small residential setups, commercial solar farms, and industrial facilities.",
        "Rated Power": "6 kW"
      },
      "general": {
        "IP Rating": "IP65 Water/Dustproof"
      }
    }
  },
  {
    "id": "knox-lithium-battery-51-2v-100amp",
    "category": "lithium-batteries",
    "brand": "Knox",
    "name": "Knox Powerwall 7.1 - 51.2V 100Ah IP65 Lithium Battery",
    "title": "Knox Powerwall 7.1 - 51.2V 100Ah IP65 Lithium Battery",
    "model": "Lithium Battery",
    "type": "LiFePO4 Lithium Battery",
    "subtitle": "LiFePO4 Lithium Battery",
    "capacity": "0.20 kWh",
    "price": 320000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/KnoxPowerwall7.1-51.2V100AhIP65LithiumBattery.png?v=1753608277",
    "specs": {
      "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
      "Voltage": "51.2V DC",
      "Capacity": "0.20 kWh",
      "Lifecycles": "6000+ Cycles"
    },
    "features": [
      "High energy capacity rating of 0.20 kWh",
      "Long lifespan supporting over 6000+ Cycles lifecycles",
      "Stable nominal DC voltage output of 51.2V DC"
    ],
    "detailedDescription": "Knox Powerwall 7.1-IP65 | 51.2V 100Ah Lithium-ion Battery Outdoor-Ready Smart Battery for Solar and Backup Energy Storage The Knox Powerwall 7.1-IP65 is a robust lithium-ion battery system engineered for outdoor solar and backup energy applications. With a usable energy capacity of approximately 5.12kWh, this battery is ideal for demanding environments, delivering consistent performance, smart diagnostics, and long cycle life. Protected by an IP65-rated enclosure, it resists dust and water intrusion, making it perfect for outdoor wall-mounted installations. It",
    "technicalDetails": {
      "overview": {
        "Brand": "Knox",
        "Model": "Lithium Battery",
        "Battery Type": "LiFePO4 (Lithium Iron Phosphate)",
        "Nominal Energy": "0.20 kWh",
        "Nominal Voltage": "51.2V DC"
      },
      "electrical": {
        "Nominal Capacity": "0.20 kWh",
        "Cycle Life": "6000+ Cycles"
      }
    }
  },
  {
    "id": "huawei-50kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Huawei",
    "name": "Huawei 50KW On Grid solar inverter",
    "title": "Huawei 50KW On Grid solar inverter",
    "model": "solar inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "50 kW",
    "price": 710000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_4_c4ecf26b-84da-45b7-803b-8f32e85635a1.png?v=1753016905",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "50 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 50,000 W rated AC active power, with a maximum apparent power of 55,000 VA . for system loads",
      "Achieves peak conversion efficiency up to High efficiency up to 98.5% , ensuring excellent performance.",
      "Handles high solar input configurations up to 1,100 V for robust energy capture.",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "The Huawei SUN2000-50KTL-M3 is a 50 kW three-phase on-grid solar inverter , designed to cater to large-scale solar installations, whether residential or commercial. Here's a summary of its",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Huawei",
        "Model": "solar inverter",
        "Rated Power": "50,000 W rated AC active power, with a maximum apparent power of 55,000 VA .",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "50,000 W rated AC active power, with a maximum apparent power of 55,000 VA .",
        "Maximum PV Input Voltage": "1,100 V for robust energy capture.",
        "Peak Efficiency": "High efficiency up to 98.5% , ensuring excellent performance."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Monitoring": "Includes FusionSolar monitoring , with WLAN/Ethernet connectivity via an optional Smart Dongle.",
        "IP Rating": "Features IP66 protection, making it dust-tight and resistant to powerful water jets—ideal for outdoor environments."
      }
    }
  },
  {
    "id": "sungrow-15kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Sungrow",
    "name": "SUNGROW 15KW OnGrid Solar Inverter",
    "title": "SUNGROW 15KW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "15 kW",
    "price": 225000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_11_c2d7239a-5840-4043-b7c9-b27c481392ea-min.png?v=1737898389",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "15 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "High anti-corrosion rating ( C5 ), ideal for various environmental conditions.",
      "IP65-rated protection for dust and water resistance.",
      "Equipped with built-in surge arresters .",
      "High-level corrosion resistance with a C5 rating .",
      "Compliance with international standards.",
      "Ideal for on-grid solar solutions in residential homes, businesses, and small commercial spaces."
    ],
    "detailedDescription": "The Sungrow 15 KW On-grid Solar Inverter (SG15KTL-M) is a high-performance solar inverter designed for residential, commercial, and small-scale industrial applications. Here's a detailed overview:",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Sungrow",
        "Model": "Solar Inverter",
        "Rated Power": "15000 VA (at 45°C).",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "15000 VA (at 45°C).",
        "Maximum PV Input Voltage": "1100 V.",
        "AC Output Voltage": "600 V.",
        "Peak Efficiency": "98.6%."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Operating Temperature": "-25°C to 60°C.",
        "Dimensions": "370 x 485 x 210 mm.",
        "Weight": "24 kg."
      }
    }
  },
  {
    "id": "sungrow-10kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Sungrow",
    "name": "SUNGROW 10KW OnGrid Solar Inverter",
    "title": "SUNGROW 10KW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10 kW",
    "price": 170000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/SUNGROW10KWOnGridSolarInverter_bf42f8c7-f2e5-4490-821d-2de4abf84f24.png?v=1753856453",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.5% (Max), 97.9% (Euro)",
      "Handles high solar input configurations up to 1100 V"
    ],
    "detailedDescription": "Sungrow SG10RT – 10kW Three-Phase String Inverter (1000Vdc System) The SG10RT from Sungrow is a high-performance, three-phase multi-MPPT inverter designed for residential and small commercial PV systems. Engineered with smart monitoring, high conversion efficiency, and robust safety",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Sungrow",
        "Model": "SG10RT",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Maximum PV Input Voltage": "1100 V",
        "MPPT Voltage Range": "160 – 1000 V",
        "Maximum PV Input Current": "37.5 A (25 A / 12.5 A)",
        "Peak Efficiency": "98.5% (Max), 97.9% (Euro)"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "IP Rating": "IP65",
        "Dimensions": "370 × 480 × 195 mm",
        "Weight": "18 kg"
      }
    }
  },
  {
    "id": "infinix-6kw-helious-solar-inverter-hybrid",
    "category": "solar-inverters",
    "brand": "Trion",
    "name": "TRION 3.6KW Hybrid Solar Inverter",
    "title": "TRION 3.6KW Hybrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "3.6 kW",
    "price": 105000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Solis10KW.png?v=1752907469",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "3.6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 3.6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "WISE PLUS 3604 (VM II-3600 TWIN) 3600W with Dual Output &amp; MPPT Charger 🌞",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Trion",
        "Model": "Solar Inverter",
        "Rated Power": "3.6 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "3.6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      }
    }
  },
  {
    "id": "growatt-50kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Growatt",
    "name": "GROWATT 50KW OnGrid solar inverter",
    "title": "GROWATT 50KW OnGrid solar inverter",
    "model": "solar inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "50 kW",
    "price": 575000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/GROWATT50KWsolarinverterongrid.png?v=1752738060",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "50 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 50 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Growatt MID 50KTL3-X2 – 50kW 3-Phase Inverter Core",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Growatt",
        "Model": "solar inverter",
        "Rated Power": "50 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "50 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "growatt-25kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Growatt",
    "name": "GROWATT 25KW OnGrid Solar Inverter",
    "title": "GROWATT 25KW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "25 kW",
    "price": 305000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/GrowattOnGrid25KW.png?v=1753015660",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "25 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 25 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Growatt MID 25KTL3-X1 – 25kW 3-Phase Inverter Core",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Growatt",
        "Model": "Solar Inverter",
        "Rated Power": "25 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "25 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "growatt-20kw-solar-inverter-ongrid",
    "category": "solar-inverters",
    "brand": "Growatt",
    "name": "GROWATT 20KW OnGrid Solar Inverter",
    "title": "GROWATT 20KW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "20 kW",
    "price": 275000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_2_cd3feae3-aa46-49dc-bf9e-bba6ba665719.png?v=1753016114",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "20 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 20 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Growatt MID 20KTL3-XH 20kW | Three Phase | Battery Ready | IP66 Rated The Growatt MID 20KTL3-XH is a high-performance three-phase hybrid inverter designed for large-scale residential or small commercial solar systems. With support for up to 40kW DC input and a DC/AC ratio of 2.0 , this inverter delivers exceptional efficiency (up to 98.8%) and smart functionality, making it a flexible solution for hybrid energy storage. This model",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Growatt",
        "Model": "Solar Inverter",
        "Rated Power": "20 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "20 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "crown-elego-6000",
    "category": "solar-inverters",
    "brand": "Crown",
    "name": "Crown Elego 6KW  solar inverter Hybrid",
    "title": "Crown Elego 6KW  solar inverter Hybrid",
    "model": "inverter Hybrid",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 150000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6KW.png?v=1753256037",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 6 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "The Elego 6KW IP21 is a premium hybrid inverter designed for maximum efficiency, flexibility, and user convenience, offering powerful energy management for residential and commercial installations.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Crown",
        "Model": "inverter Hybrid",
        "Rated Power": "6 kW",
        "Phase": "Single Phase",
        "Application": "Ideal for homes, businesses, and industries requiring efficient energy solutions."
      },
      "technicalSpecifications": {
        "Rated Output Power": "6 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "general": {
        "Display": "Equipped with a 5\" LCD and touchpad for real-time monitoring and control."
      }
    }
  },
  {
    "id": "goodwe-30kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "GoodWe",
    "name": "GoodWe 30KW Ongrid solar inverter",
    "title": "GoodWe 30KW Ongrid solar inverter",
    "model": "solar inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "30 kW",
    "price": 390000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/GoodWe30KWOngridsolarinverter.png?v=1754218344",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "30 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 30 kW for system loads",
      "Achieves peak conversion efficiency up to Max: 98.8%, European: 98.5%",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "The GoodWe GW30K-MT is a high-performance three-phase on-grid inverter designed for commercial rooftop solar systems. With an impressive efficiency of 98.8%, solid capacitors, and a fuse-free design, it enhances system reliability and reduces maintenance. Additionally, its optional Arc Fault Circuit Interrupter (AFCI) adds an extra layer of protection, ensuring the system's safety and longevity.",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "GoodWe",
        "Model": "solar inverter",
        "Rated Power": "30 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "30 kW",
        "Peak Efficiency": "Max: 98.8%, European: 98.5%"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter",
        "Anti-Islanding Protection": "Disconnects the inverter during grid outages for safety."
      },
      "protection": {
        "Reverse Polarity Protection": "Prevents damage from incorrect wiring."
      },
      "general": {
        "Monitoring": "Provides real-time tracking of solar string performance.",
        "Operating Temperature": "-30°C to +60°C",
        "Weight": "40kg"
      }
    }
  },
  {
    "id": "goodwe-20kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "GoodWe",
    "name": "GoodWe 20KW Ongrid solar inverter",
    "title": "GoodWe 20KW Ongrid solar inverter",
    "model": "solar inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "20 kW",
    "price": 285000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/GoodWe20KWOngridsolarinverter.png?v=1754218248",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "20 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 20 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "The GoodWe GW20K-SDT-30 G3 is a highly efficient three-phase on-grid solar inverter, designed for residential and small commercial applications. It offers advanced safety",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "GoodWe",
        "Model": "solar inverter",
        "Rated Power": "20 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "20 kW",
        "Maximum Output Current": "33.3A, adjustable power factor from 0.8 leading to 0.8 lagging.",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Compatible with 3L/N/PE, 180–280V AC grid voltage, and 50/60Hz grid frequency.",
        "Anti-Islanding Protection": "Ensures system safety during grid outages."
      },
      "protection": {
        "Reverse Polarity Protection": "Safeguards the inverter from incorrect wiring."
      },
      "general": {
        "Monitoring": "Prevents electrical leakage for added protection.",
        "Weight": "Simplifies setup, reducing installation time."
      }
    }
  },
  {
    "id": "goodwe-15kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "GoodWe",
    "name": "GoodWe 15KW OnGrid Solar Inverter",
    "title": "GoodWe 15KW OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "15 kW",
    "price": 230000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_3_16cb0c0b-2e1f-4382-89bf-72c35598b3cb.png?v=1753256605",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "15 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 15 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "GoodWe GW15K-SDT-30 G3 (15KW Three Phase On-Grid Inverter) Brand: GoodWe Type: Solar Inverter (Three Phase – On-Grid) Model: GW15K-SDT-30",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "GoodWe",
        "Model": "Solar Inverter",
        "Rated Power": "15 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "15 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "goodwe-10kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "GoodWe",
    "name": "GoodWe 10KW OnGrid solar inverter",
    "title": "GoodWe 10KW OnGrid solar inverter",
    "model": "solar inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10 kW",
    "price": 185000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/GoodWe10KWOngridsolarinverter.png?v=1753768240",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 10 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "This GoodWe GW10K-SDT-30 G3 inverter is a highly efficient three-phase on-grid solar inverter designed for residential and small commercial applications. It offers impressive",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "GoodWe",
        "Model": "solar inverter",
        "Rated Power": "10 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10 kW",
        "Maximum Output Current": "16.7A, adjustable power factor from 0.8 leading to 0.8 lagging.",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Compatible with 220/380V AC grid voltage and 50/60Hz grid frequency."
      }
    }
  },
  {
    "id": "solis-50kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 50KW Ongrid Solar Inverter",
    "title": "Solis 50KW Ongrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "50 kW",
    "price": 545000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Knox6KWpv8000Hybrid_6_11a3ce65-2f9b-4ffa-bfbd-b727fb25071a.png?v=1753017545",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "50 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 50kW, designed for high-power solar applications. for system loads",
      "Achieves peak conversion efficiency up to Max. efficiency of 98.3%, ensuring high energy yield.",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "This Solis 50K-5G-50KW On-Grid Inverter is designed for large-scale solar power generation, providing reliable and efficient performance for commercial and industrial solar systems. With advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Solis",
        "Model": "Solar Inverter",
        "Rated Power": "50kW, designed for high-power solar applications.",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "50kW, designed for high-power solar applications.",
        "Peak Efficiency": "Max. efficiency of 98.3%, ensuring high energy yield."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Monitoring": "Smart monitoring with Wi-Fi or GPRS capabilities, allowing remote access and performance tracking.",
        "IP Rating": "Includes features like DC reverse-polarity, short circuit, overcurrent, and overvoltage protection."
      }
    }
  },
  {
    "id": "solis-15kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 15KW Ongrid Solar  Inverter",
    "title": "Solis 15KW Ongrid Solar  Inverter",
    "model": " Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "15 kW",
    "price": 240000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Solis_15kw-min.png?v=1737898387",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "15 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 15 kW for system loads",
      "Achieves peak conversion efficiency up to Up to 98.7% ensuring maximum energy conversion.",
      "Built-in telemetry interfaces for remote app monitoring"
    ],
    "detailedDescription": "The Solis 15KW Ongrid Solar  Inverter is a professional-grade 15 kW Single Phase on-grid inverter designed by Solis. It offers high performance with a peak conversion efficiency of Up to 98.7% ensuring maximum energy conversion.. ",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Solis",
        "Model": " Inverter",
        "Rated Power": "15 kW",
        "Phase": "Single Phase",
        "Application": "Ideal for large residential and commercial solar installations."
      },
      "technicalSpecifications": {
        "Rated Output Power": "15 kW",
        "MPPT Voltage Range": "160V-850V for greater flexibility and efficiency.",
        "Peak Efficiency": "Up to 98.7% ensuring maximum energy conversion."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "Monitoring": "RS485 communication and optional WiFi/LAN/GPRS interfaces for easy performance monitoring through dedicated apps for iPhone and Android."
      }
    }
  },
  {
    "id": "solis-10kw-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 10KW Ongrid Solar  Inverter",
    "title": "Solis 10KW Ongrid Solar  Inverter",
    "model": " Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "10 kW",
    "price": 200000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Solis10KWOngridSolarInverter.png?v=1753771665",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "10 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Short Circuit Protection",
      "Surge Protection",
      "Grid Monitoring",
      "Temperature Protection",
      "Rated power capacity of 10kW for system loads",
      "Achieves peak conversion efficiency up to 98% maximum efficiency for reliable and optimized power output."
    ],
    "detailedDescription": "The Solis 10kW On-Grid Inverter is designed to optimize solar energy generation, offering a robust and efficient solution for residential and commercial solar installations. This inverter delivers high performance with a maximum efficiency of 98%, ensuring the most effective energy conversion for your solar system.",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Solis",
        "Model": "Solis-3P10K-4G-LV",
        "Rated Power": "10kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "10kW",
        "Maximum PV Input Voltage": "1000V",
        "MPPT Voltage Range": "160-500V",
        "Maximum PV Input Current": "22A",
        "Maximum Short-Circuit Current": "34.3A",
        "Maximum Output Current": "28.8A",
        "Peak Efficiency": "98% maximum efficiency for reliable and optimized power output."
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      },
      "general": {
        "IP Rating": "IP65",
        "Dimensions": "310 x 563 x 219mm",
        "Weight": "19.8kg"
      }
    }
  },
  {
    "id": "solis-12kw-ip66-l-plus-model-hybrid-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 12KW IP66 L Plus Model Hybrid Inverter",
    "title": "Solis 12KW IP66 L Plus Model Hybrid Inverter",
    "model": "Hybrid Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "12 kW",
    "price": 535000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/12KWIP-66HYBRID.png?v=1773310377",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "12 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 12 kW for system loads",
      "Supports 2 / 4 independent MPPT tracking inputs",
      "Achieves peak conversion efficiency up to 98.2% peak",
      "Handles high solar input configurations up to 1000 V"
    ],
    "detailedDescription": "Solis S6-EH3P12K02-NV-YD-L (12 kW Model): PV Input: Specification Value Recommended PV size 24 kW Max usable PV power 19.2 kW Max input voltage 1000 V MPPT range 200 – 850 V Max input current 40 A / 40 A Max short-circuit current 50 A / 50 A MPPT / Strings 2 / 4 Battery: Specification Value Battery voltage 40 – 60 V Max charge/discharge current 250 A Grid Output: Specification Value Rated power 12 kW Max apparent power 12 kVA Rated output current 18.2 A / 17.3 A Max output current 18.2 A Generator Input: Specification Value Max power 12 kW Max input current 18.2 A Backup Output: Specification Value Rated power 12 kW Peak power 24 kW for 10 sec Switch time &lt;10 ms",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Solis",
        "Model": "Hybrid Inverter",
        "Rated Power": "12 kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "12 kW",
        "Maximum PV Input Power": "19.2 kW",
        "Maximum PV Input Voltage": "1000 V",
        "MPPT Voltage Range": "200 – 850 V",
        "Number of MPPTs": "2 / 4",
        "Maximum PV Input Current": "18.2 A",
        "Maximum Short-Circuit Current": "50 A / 50 A",
        "Rated Output Current": "18.2 A / 17.3 A",
        "Maximum Output Current": "18.2 A",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Voltage Range": "40 – 60 V",
        "Maximum Charging Current": "250 A",
        "Maximum Discharging Current": "250 A"
      }
    }
  },
  {
    "id": "solis-8kw-ip66-l-plus-model-hybrid-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 8KW IP66 L Plus Model Hybrid Inverter",
    "title": "Solis 8KW IP66 L Plus Model Hybrid Inverter",
    "model": "Hybrid Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "8 kW",
    "price": 335000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/Solis_10KW_3-min.png?v=1737898387",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "8 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 8kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Solis hybrid 6kw and 8kw Solar inverter with LCD at lowest price at Kamal Solar House Multan The Solis 8KW IP66 L Plus Model Hybrid Inverter is a high-performance, versatile energy solution designed for both residential and commercial solar systems. Built to maximize energy efficiency, it integrates seamlessly with solar arrays, batteries, and generators. Offering advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Solis",
        "Model": "Hybrid Inverter",
        "Rated Power": "8kW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "8kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Compatibility": "Compatible with both lithium and lead-acid batteries"
      },
      "general": {
        "IP Rating": "IP66"
      }
    }
  },
  {
    "id": "solis-6kw-ip66-l-plus-model-hybrid-inverter",
    "category": "solar-inverters",
    "brand": "Solis",
    "name": "Solis 6KW IP66 L Plus Model Hybrid Inverter",
    "title": "Solis 6KW IP66 L Plus Model Hybrid Inverter",
    "model": "Hybrid Inverter",
    "type": "Hybrid Inverter",
    "subtitle": "Hybrid Inverter",
    "capacity": "6 kW",
    "price": 235000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/6KWIP65Hybrid.png?v=1771063932",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "Hybrid Inverter",
      "Capacity": "6 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Seamless Integration Supports solar, grid, and generator connectivity for uninterrupted power.",
      "Automatic UPS switching within 10 seconds for reliable backup during outages.",
      "High Efficiency and Capacity Rated for 6kW output , suitable for medium-sized energy needs.",
      "Max. PV array size of 12kW ensures excellent solar utilization.",
      "Battery Compatibility Compatible with Li-ion and Lead-acid batteries , offering flexibility in storage solutions.",
      "135A charge/discharge current supports efficient energy management."
    ],
    "detailedDescription": "Solis hybrid 6kw and 8kw Solar inverter with LCD at lowest price at Kamal Solar House Multan The Solis S6-EH1P6K-L-PLUS 6KW Hybrid Solar Inverter offers an efficient and versatile solution for residential and commercial energy needs. With advanced hybrid technology, high surge power capacity, and compatibility with multiple energy sources, this inverter ensures reliability and performance.",
    "technicalDetails": {
      "overview": {
        "Product Type": "Hybrid Inverter",
        "Brand": "Solis",
        "Model": "Hybrid Inverter",
        "Rated Power": "6KW",
        "Phase": "Single Phase",
        "Application": "Hybrid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "6KW",
        "MPPT Voltage Range": "90–435V",
        "Peak Efficiency": "96.2% (Max), 96.1% (EU)"
      },
      "gridTiedOperation": {
        "Grid Connection": "Hybrid Inverter"
      },
      "battery": {
        "Battery Type": "Li-ion / Lead-acid",
        "Maximum Charging Current": "135A",
        "Maximum Discharging Current": "135A"
      },
      "general": {
        "IP Rating": "IP66",
        "Dimensions": "335×560×253 mm",
        "Weight": "23.5 kg"
      }
    }
  },
  {
    "id": "knox-60kw-g2-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox 60KW G4 pro OnGrid Solar Inverter",
    "title": "Knox 60KW G4 pro OnGrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "60 kW",
    "price": 510000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/60KWG2Ongrid.png?v=1753256874",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "60 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Exceptional efficiency ensures optimal solar energy conversion, maximizing your return on investment.",
      "Advanced data analytics to track and manage system performance effectively.",
      "Designed to protect your system and extend the operational life of the inverter.",
      "Simple installation process to reduce setup time and complexity.",
      "Built to endure long-term, heavy-duty industrial and commercial usage.",
      "Rated power capacity of 60 kW for system loads"
    ],
    "detailedDescription": "Knox ASW 60K LT-G2 On-Grid Inverter The Knox ASW 60K LT-G2 On-Grid Inverter is a cutting-edge 60kW solar inverter, designed to provide high-efficiency energy conversion for large-scale solar systems. With its robust build, advanced",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "60 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "60 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  },
  {
    "id": "knox-50kw-g4-pro-ongrid-solar-inverter",
    "category": "solar-inverters",
    "brand": "Knox",
    "name": "Knox 50KW G4 Pro Ongrid Solar Inverter",
    "title": "Knox 50KW G4 Pro Ongrid Solar Inverter",
    "model": "Solar Inverter",
    "type": "On-Grid Inverter",
    "subtitle": "On-Grid Inverter",
    "capacity": "50 kW",
    "price": 415000,
    "image": "https://cdn.shopify.com/s/files/1/0635/5818/9226/files/50kwongrid.png?v=1751889061",
    "specs": {
      "Phase": "Single Phase",
      "Grid Type": "On-Grid Inverter",
      "Capacity": "50 kW",
      "Efficiency": "98.2% peak"
    },
    "features": [
      "Rated power capacity of 50 kW for system loads",
      "Achieves peak conversion efficiency up to 98.2% peak"
    ],
    "detailedDescription": "Xerox G4 Pro 50kW Three Phase Inverter High-Capacity, Smart Inverter for Large-Scale Solar Installations The Xerox G4 Pro 50kW is a powerful and intelligent three-phase inverter tailored for commercial and industrial solar energy systems. Built to deliver high conversion efficiency and operational reliability, it offers intelligent",
    "technicalDetails": {
      "overview": {
        "Product Type": "On-Grid Inverter",
        "Brand": "Knox",
        "Model": "Solar Inverter",
        "Rated Power": "50 kW",
        "Phase": "Single Phase",
        "Application": "On-Grid Inverter"
      },
      "technicalSpecifications": {
        "Rated Output Power": "50 kW",
        "Peak Efficiency": "98.2% peak"
      },
      "gridTiedOperation": {
        "Grid Connection": "On-Grid Inverter"
      }
    }
  }
];

export const industryPagesData = {
  residential: {
    title: "Residential Solar Solutions",
    intro: "Take control of your home utility costs with reliable, clean solar power. Our residential systems are tailored to Pakistan's unique climate and rooftop layouts, ensuring maximum performance and protection against rising tariffs.",
    benefits: [
      { title: "Bill Reduction", text: "Offset up to 90% of your household electricity bill via net metering." },
      { title: "Property Value", text: "Premium solar installations increase residential property market value." },
      { title: "Clean Backup", text: "Protect your family from outages without noisy, polluting generators." },
      { title: "Sustainability", text: "Offset tons of carbon emissions yearly while contributing to a green grid." }
    ],
    solutionOverview: "We offer both Grid-Tied (Net-Metered) systems for maximum financial return, and Hybrid systems containing advanced Lithium storage to deliver reliable backup power during load-shedding intervals.",
  },
  commercial: {
    title: "Commercial Solar Systems",
    intro: "Reduce operating expenditures and showcase your corporate commitment to sustainability. Our commercial solar structures deliver reliable, high-yield generation to commercial offices, educational complexes, and retail centers.",
    benefits: [
      { title: "Tax Benefits & Depreciation", text: "Leverage accelerated depreciation assets to optimize tax filings." },
      { title: "Fixed Utility Expenses", text: "Hedge against unpredictable electricity tariff hikes for the next 25 years." },
      { title: "ESG Compliance", text: "Meet corporate social responsibility objectives and international green criteria." },
      { title: "Rapid Amortization", text: "Typical commercial setups achieve complete payback in under 4 years." }
    ],
    solutionOverview: "Our systems feature enterprise-level monitoring dashboards, safety-first electrical engineering, and full coordination for commercial net metering connection setups.",
  },
  industrial: {
    title: "Industrial Solar Infrastructure",
    intro: "Empower heavy manufacturing, textile plants, cold storages, and agricultural processing with high-capacity solar setups. Designed to secure reliable, large-scale daytime operations and maximize thermal/electrical efficiency.",
    benefits: [
      { title: "Peak Demand Management", text: "Substantially reduce maximum demand charges during peak daytime solar hours." },
      { title: "Grid Stabilization", text: "Prevent machine downtime caused by voltage dips or brownouts from local feeders." },
      { title: "Operational Continuity", text: "Integrate solar outputs with industrial diesel generators to reduce fuel usage by up to 40%." },
      { title: "Global Certifications", text: "Enable carbon-neutral exports to fulfill rigorous international vendor mandates." }
    ],
    solutionOverview: "From MW-scale rooftop arrays to ground-mounted utility designs, we deploy advanced engineering models featuring thermal monitoring and SCADA integration.",
  }
};

export const techPartners = [
  { name: "Partner Brand A (Tier-1 Panels)" },
  { name: "Partner Brand B (Premium Inverters)" },
  { name: "Partner Brand C (Lithium Battery Manufacturer)" },
  { name: "Partner Brand D (Electrical Switchgear)" },
];


export const blogArticles = [
  {
    id: "art-1",
    category: "SOLAR TECHNOLOGY",
    title: "Guide to Net Metering in Pakistan: What You Need to Know",
    excerpt: "A practical overview of the net-metering process, system requirements, documentation, and the key stages involved in connecting a solar installation to the grid.",
    readTime: "5 MIN READ",
    label: "ENERGY GUIDE",
    introduction: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. Under NEPRA regulations, residential, commercial, and industrial consumers can install solar PV systems up to 1 MW and export excess electricity to their local distribution company (DISCO) to reduce monthly electricity overheads.",
    sections: [
      {
        heading: "01 — How a Grid-Connected System Works",
        content: "A grid-connected (on-grid) solar system works in direct synchronization with the electric grid. The solar PV array converts solar irradiance into DC electricity, which is then converted to AC power by a grid-tied inverter. This power goes directly into your main distribution panel to run your active household or facility load. When solar generation exceeds your consumption, the excess energy is automatically fed back to the utility grid through a bidirectional smart meter. At night or during cloudy days, you import energy from the grid as normal."
      },
      {
        heading: "02 — Basic Eligibility & Site Considerations",
        content: "Before initiating a net-metering application, your site must satisfy certain operational criteria. First, you must have a three-phase connection from your local distribution company (DISCO). Second, the capacity of your proposed solar system cannot exceed your sanctioned electricity load. Additionally, your roof must have adequate, shaded-free physical space and be structurally capable of supporting the dead weight of the mounting frames and solar modules. Proper earthing is also required to protect system equipment."
      },
      {
        heading: "03 — Application & Documentation Stage",
        content: "Applying for net metering requires submitting a complete technical and administrative docket to your DISCO. The documentation includes the applicant's CNIC, three months of paid utility bills, a structural stability certificate signed by a registered engineer, electrical single-line diagrams (SLD) detailing layout schematics, equipment datasheets showing compliance, and earthing test reports confirming low resistance readings."
      },
      {
        heading: "04 — Inspector Approvals & Green Meter Installation",
        content: "Once the DISCO reviews the application, a physical site survey is conducted by DISCO engineers to verify compliance. After their approval, a electrical inspector inspects the system to issue a safety certificate. Next, NEPRA grants the net-metering license. Finally, the existing utility billing meter is replaced with a bidirectional green meter, allowing you to feed energy back to the grid and receive utility credit exports."
      }
    ],
    conclusion: "Net metering provides an effective way to offset daytime utility bills. Partnering with experienced engineering specialists ensures your system is designed safely and your application proceeds efficiently through all regulatory stages.",
    keyPoints: [
      "Requires a three-phase utility electricity connection.",
      "System capacity is capped at your sanctioned load.",
      "Requires a structural engineering safety certificate.",
      "NEPRA net-metering licensing takes 4 to 8 weeks."
    ]
  },
  {
    id: "art-2",
    category: "ENERGY SYSTEMS",
    title: "Hybrid vs. On-Grid Solar Systems: Understanding the Difference",
    excerpt: "Compare grid-tied and hybrid solar configurations, including backup capability, battery storage, system architecture, and the factors that influence the right choice for a site.",
    readTime: "8 MIN READ",
    label: "TECHNICAL GUIDE",
    introduction: "Selecting the correct solar PV system configuration depends on your local grid stability, battery backup requirements, initial investment capacity, and long-term operating plans.",
    sections: [
      {
        heading: "01 — Understanding On-Grid Solar Systems",
        content: "An on-grid (grid-tied) system is connected directly to the utility grid. It is designed to offset grid consumption during daytime hours by exporting excess generation through net metering. Because it does not use battery storage, it is the most affordable solar option and offers the fastest return on investment. However, for safety reasons (to prevent feedback during utility maintenance), on-grid inverters shut down during load-shedding and power outages."
      },
      {
        heading: "02 — Understanding Hybrid Solar Systems",
        content: "A hybrid solar system integrates battery storage alongside the grid connection. It operates in parallel with the grid during normal conditions, offseting electricity bills. When the utility grid fails, the hybrid inverter isolates the facility from the grid (creating an independent microgrid) and continues to power critical loads using solar power and stored battery energy, ensuring continuous backup power."
      },
      {
        heading: "03 — Cost & Maintenance Considerations",
        content: "On-grid solar systems have very low maintenance costs because they lack chemical battery banks. Hybrid systems require a larger initial capital investment to purchase lithium-ion or lead-acid batteries and hybrid inverters. Batteries also require periodic replacement (typically every 5 to 10 years for lithium storage), which increases long-term operational expenditures."
      },
      {
        heading: "04 — Selecting the Right Configuration",
        content: "For residential or commercial sites with highly stable utility grids where bill reduction is the primary goal, an on-grid system is the recommended solution due to its faster payback. For locations experiencing frequent load-shedding where backup power is necessary for business continuity or critical appliances, a hybrid system with battery storage is the optimal configuration."
      }
    ],
    conclusion: "Evaluate your regional grid downtime, backup priorities, and initial capital budget to select the optimal solar system configuration.",
    keyPoints: [
      "On-grid systems are highly cost-effective but do not provide backup during grid outages.",
      "Hybrid systems include battery storage to run critical loads during load-shedding.",
      "Hybrid systems require a higher initial capital outlay and periodic battery replacements."
    ]
  },
  {
    id: "art-3",
    category: "INDUSTRIAL ENERGY",
    title: "How Solar Can Support Industrial Energy Operations",
    excerpt: "Explore how industrial facilities evaluate solar generation around daytime demand, operating conditions, available roof area, energy costs, and system capacity.",
    readTime: "6 MIN READ",
    label: "INDUSTRY INSIGHT",
    introduction: "Industrial facilities face unique energy challenges, including heavy load profiles, continuous operating cycles, and rising electricity tariffs. Integrating solar power is an effective strategy to stabilize operational costs.",
    sections: [
      {
        heading: "01 — Aligning Solar Sizing with Daytime Load Profiles",
        content: "Industrial solar installations are sized to align with the plant's daytime load profile. By analyzing historical consumption patterns and active peak demand periods, engineers can size the solar array to offset grid consumption without over-generating during off-peak times, optimizing system payback and capacity utilization."
      },
      {
        heading: "02 — Rooftop and Ground-Mount Considerations",
        content: "Industrial sites often have large steel-framed roofs or open ground areas. Sizing the PV array requires conducting a structural analysis of the roof load-bearing capacity to ensure it can support the wind and dead loads of the solar modules. Proper placement helps maximize solar harvest throughout the day."
      },
      {
        heading: "03 — Integrating Solar with Backup Diesel Generators",
        content: "For industrial sites requiring backup generators during grid outages, solar can be integrated with generators using smart controllers. These controllers monitor generation and load, adjusting solar output to reduce diesel fuel consumption by up to 40% while preventing reverse current flow into the generators."
      },
      {
        heading: "04 — SCADA Monitoring & SCADA Maintenance",
        content: "Industrial systems require continuous monitoring to ensure operational performance. Integrating SCADA tools allows operators to track inverter status, string current, temperature, and environmental conditions. Regular electrical inspections help identify and resolve issues early, ensuring system uptime."
      }
    ],
    conclusion: "By conducting detailed load profile assessments and proper engineering analysis, industrial owners can offset operational emissions and stabilize electricity overheads.",
    keyPoints: [
      "Industrial solar is sized to match active daytime consumption load profiles.",
      "Requires structural roof analysis to ensure dead load and wind load safety.",
      "Smart controllers enable integration with backup diesel generators to save fuel.",
      "Continuous SCADA monitoring helps maintain system efficiency and uptime."
    ]
  },
];

export const faqsData = [
  {
    id: "faq-net-metering",
    serial: "01",
    question: "What is net metering and how does it work?",
    answer: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they export back to the utility grid. When your solar panels generate more electricity than your property consumes, the excess energy is routed to the national grid. Your bidirectional green meter records this export. At the end of the billing cycle, your distribution company (DISCO) offsets your imports against your exports, billing you only for the net energy consumed."
  },
  {
    id: "faq-process",
    serial: "02",
    question: "How does the net-metering application process work in Pakistan?",
    answer: "The process involves submitting a technical application to your local distribution company (DISCO) along with structural stability certificates, electrical single-line diagrams, and equipment specification sheets. After DISCO engineers conduct a site safety assessment, a physical inspection certificate is issued, followed by NEPRA net-metering license generation. Finally, your bidirectional green meter is installed."
  },
  {
    id: "faq-sizing",
    serial: "03",
    question: "How do I determine the right solar system size for my property?",
    answer: "System capacity is determined by analyzing your average monthly electricity consumption (kWh) recorded on your utility bills, available unshaded rooftop or ground area, and peak load requirements. Our engineers evaluate your load profiles to recommend a capacity that balances your generation yield with your capital budget constraints."
  },
  {
    id: "faq-types",
    serial: "04",
    question: "What is the difference between an on-grid, hybrid, and off-grid solar system?",
    answer: "An on-grid system operates in parallel with the utility grid and exports excess energy, but shuts down during grid outages for utility safety. A hybrid system combines grid connection with battery storage to run critical loads during load-shedding. An off-grid system runs entirely independently of the utility grid using dedicated batteries and generator backups."
  },
  {
    id: "faq-panels-lifespan",
    serial: "05",
    question: "How long do solar panels typically last?",
    answer: "Premium Tier-1 solar panels are engineered for long-term durability, typically carrying a 12 to 15-year product warranty and a 25-year linear performance warranty. Over time, panels experience minor annual degradation (typically less than 0.5% per year), meaning they continue to generate substantial power even after 25 years."
  },
  {
    id: "faq-batteries-lifespan",
    serial: "06",
    question: "How long do lithium solar batteries last?",
    answer: "Modern lithium-ion storage batteries (such as LiFePO4 chemistry) typically last between 10 to 15 years, depending on charge/discharge cycles, operating temperatures, and battery management settings. They offer significantly higher round-trip efficiency and depth of discharge compared to traditional lead-acid options."
  },
  {
    id: "faq-outage",
    serial: "07",
    question: "What happens to my solar system during a grid outage?",
    answer: "In a standard on-grid system, the solar inverter automatically shuts down during a utility outage to prevent feeding energy into dead lines (islanding protection). In a hybrid or off-grid configuration, the system isolates itself from the utility grid and uses stored battery energy to power critical loads."
  },
  {
    id: "faq-roof-space",
    serial: "08",
    question: "How much roof space is required for a solar installation?",
    answer: "As a general rule, a 1 kW solar array requires approximately 80 to 100 square feet of shadow-free roof area. The total space needed depends on module wattage, tilt angle, orientation, and access gaps required for maintenance. A structural assessment is conducted to determine the exact panel layouts."
  },
  {
    id: "faq-maintenance",
    serial: "09",
    question: "What maintenance does a solar system require?",
    answer: "Solar systems require minimal maintenance. The primary requirement is regular panel cleaning (typically twice a month) to remove dust, soot, and debris, which can reduce light absorption. Annual electrical testing and thermal inspections help detect micro-cracks or connection issues early."
  },
  {
    id: "faq-selection",
    serial: "10",
    question: "How does ES Energy determine the right system for a project?",
    answer: "Our engineering team conducts a feasibility audit including structural roof inspection, shading analysis, utility bill review, and load logging. We then create a system design selecting compatible inverters and Tier-1 components to match the specific energy demands of your site."
  }
];

export const projectsData = [
  {
    id: "proj-1",
    category: "commercial",
    title: "Corporate Office Solar Installation",
    client: "Corporate Partner",
    capacity: "Commercial Rooftop Solar",
    location: "Punjab, Pakistan",
    year: "Recent",
    brief: "A commercial rooftop solar configuration designed around daytime office energy demand, with a focus on efficient generation, grid interaction, and long-term operating value.",
    focus: [
      "Daytime commercial load optimization",
      "Rooftop solar generation",
      "Grid-connected system design"
    ],
    results: [
      "Daytime commercial load optimization",
      "Rooftop solar generation",
      "Grid-connected system design"
    ]
  },
  {
    id: "proj-2",
    category: "industrial",
    title: "Industrial Solar Energy System",
    client: "Industrial Partner",
    capacity: "Industrial Rooftop Solar",
    location: "Pakistan",
    year: "Recent",
    brief: "An industrial-scale solar configuration engineered to support high daytime electricity demand while improving energy efficiency and reducing dependence on conventional grid supply.",
    focus: [
      "High-demand industrial applications",
      "Large rooftop solar deployment",
      "Grid and backup integration"
    ],
    results: [
      "High-demand industrial applications",
      "Large rooftop solar deployment",
      "Grid and backup integration"
    ]
  },
  {
    id: "proj-3",
    category: "residential",
    title: "Premium Residential Solar System",
    client: "Residential Owner",
    capacity: "Hybrid Rooftop Solar with Storage",
    location: "Pakistan",
    year: "Recent",
    brief: "A residential solar solution designed around household consumption, backup requirements, and intelligent energy management.",
    focus: [
      "Residential rooftop generation",
      "Hybrid inverter integration",
      "Battery-ready energy storage"
    ],
    results: [
      "Residential rooftop generation",
      "Hybrid inverter integration",
      "Battery-ready energy storage"
    ]
  }
];

export const solarCalculatorConfig = {
  defaultBill: 30000,
  minBill: 10,
  maxBill: 500000,
  panelWattage: 550, // 550W Panels
  estimatedYield: 125, // kWh generation per kW system size per month
  averageTariff: 60, // PKR per unit (average Pakistan commercial/residential tariff rate)
  averageOffset: 85, // estimated offset percentage of daytime grid consumption
};



// WhatsApp number from NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local
export const WHATSAPP_NUMBER = getWhatsAppNumber() || 'YOUR_WHATSAPP_NUMBER';

/**
 * Generates a WhatsApp API link for a single product order inquiry.
 */
export const getWhatsAppProductUrl = (product, quantity = 1) => {
  const priceStr = product.price 
    ? `Rs. ${product.price.toLocaleString('en-US')}` 
    : 'Price on request';
    
  const text = `Hello ES Energy,

I am interested in ordering:

Product: ${product.title}
Brand: ${product.brand.toUpperCase()}
Price: ${priceStr}
Quantity: ${quantity}

Please share availability and order details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Generates a WhatsApp API link for checking out the full shopping cart contents.
 */
export const getWhatsAppCartUrl = (cartItems, totalItems, totalPrice) => {
  let hasPriceOnRequest = false;
  const itemsText = cartItems.map(item => {
    let itemPriceStr = '';
    if (item.price) {
      itemPriceStr = `Rs. ${item.price.toLocaleString('en-US')}`;
      if (item.quantity > 1) {
        itemPriceStr += ' each';
      }
    } else {
      itemPriceStr = 'Price on request';
      hasPriceOnRequest = true;
    }
    return `${item.quantity} × ${item.title} — ${itemPriceStr}`;
  }).join('\n');

  const totalStr = hasPriceOnRequest 
    ? `Rs. ${totalPrice.toLocaleString('en-US')} (excluding items with price on request)` 
    : `Rs. ${totalPrice.toLocaleString('en-US')}`;

  const text = `Hello ES Energy,

I would like to place an inquiry/order for:

${itemsText}

Total Items: ${totalItems}
Estimated Total: ${totalStr}

Please confirm availability and next steps.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const contactConfig = sharedContactConfig;

export const getOptimizedImageUrl = (url, width = 400) => {
  if (!url) return '';
  if (url.includes('cdn.shopify.com')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}width=${width}&format=webp`;
  }
  return url;
};


