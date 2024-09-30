export interface ProjectSettingsProps {
  projectKey: string;
  services: {
    twilio: boolean;
    pushNotifications: boolean;
    google: boolean;
    apple: boolean;
  };
  serviceStatus: boolean;
  sid: string;
  phoneNumber: string;
  authenticationToken: string;
  thresholdMinute: number;
  thresholdHour: number;
  thresholdDay: number;
}



export interface Project {
  id: number;
  projectKey: string;
  sid: string;
  phoneNumber: string;
  authToken: string;
  thresholdMinute: number;
  thresholdHour: number;
  thresholdDay: number;
  status: string;
}

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    projectKey: "sdhkjashdjkahsjkdas",
    sid: "dhisadbiasbgdjagn",
    phoneNumber: "1478523695",
    authToken: "shdsabdjabgsdbajd",
    thresholdMinute: 40,
    thresholdHour: 24,
    thresholdDay: 2,
    status: "active",
  },
  {
    id: 2,
    projectKey: "euyqwtuygjhzbx",
    sid: "llhasldhakdhiads",
    phoneNumber: "1478523695",
    authToken: "qwrqyfdyfvvyadsbv",
    thresholdMinute: 40,
    thresholdHour: 24,
    thresholdDay: 2,
    status: "active",
  },
  {
    id: 3,
    projectKey: "kujfgfjlfjklsjfkldslkff",
    sid: "md,dvmdklsjkljdlgfs",
    phoneNumber: "56598746546",
    authToken: "shdsabdjabgsdbajd",
    thresholdMinute: 40,
    thresholdHour: 24,
    thresholdDay: 2,
    status: "inactive",
  }
]
