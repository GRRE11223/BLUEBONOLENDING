export type Status = 'active' | 'inactive' | 'pending';

export type LoanStatus = 'Inquiried' | 'Open Escrow' | 'Underwriting' | 'Ready to Fund' | 'Funded' | 'Servicing' | 'Completed' | 'Hold' | 'Canceled' | 'In Process (Consultant)' | 'Waiting for a Banker' | 'Accepted';

export type Role = {
  id: string;
  name: string;
  description?: string;
  permissions: string[];
  scope: string;
  isCustom: boolean;
  brokerId?: string;
  createdAt: string;
  updatedAt: string;
};

export interface BrokerCompany {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export interface BorrowerInfo {
  email: string;
  phone: string;
  creditScore: number;
  annualIncome: number;
  employmentStatus: 'employed' | 'self-employed' | 'unemployed' | 'retired';
  employerName?: string;
  employmentLength?: string;
  documents: Document[];
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash?: string;
  role: Role;
  roleId: string;
  brokerId?: string;
  phoneNumber?: string;
  status: Status;
  isAdmin: boolean;
  broker?: Broker | null;
  createdAt: string;
  updatedAt: string;
}

export interface Broker {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: string;
  userId: string;
  brokerId: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  invitationSentAt?: string;
}

export interface Document {
  id: string;
  name: string;
  category: string;
  status: string;
  versions: {
    id: string;
    url: string;
    uploadedAt: string;
    uploadedBy: string;
    fileName: string;
    size: number;
    type: string;
  }[];
  comments: {
    id: string;
    user: string;
    content: string;
    timestamp: string;
  }[];
  loanRequestId: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoanRequest {
  id: string;
  userId: string;
  title: string;
  type: string;
  borrowerName: string;
  borrowerInfo: BorrowerInfo;
  status: LoanStatus;
  createdAt: string;
  updatedAt: string;
  documents: Document[];
  escrowInfo: {
    officerName?: string;
    email: string;
    phone?: string;
    insuranceEmail: string;
    documents: Document[];
  };
  titleInfo: {
    officerName?: string;
    email: string;
    phone?: string;
    documents: Document[];
  };
  progress: {
    borrower: number;
    escrow: number;
    title: number;
    underwriting: number;
    preFunding: number;
    postFunding: number;
    summary: number;
  };
  underwriting: {
    loanTerms: {
      rate: number;
      term: number;
      maxLtv: number;
    };
    documents: Document[];
    riskAnalysis: {
      score: number;
      factors: string[];
    };
    propertyDetails: {
      type: string;
      value: number;
      location?: {
        lat: number;
        lng: number;
      };
    };
  };
  loanAmount: number;
  loan: {
    amount: number;
    rate: number;
    term: number;
    type: string;
    status: string;
    propertyType: string;
    propertyValue: number;
    ltv: number;
    loanPurpose: string;
    loanProgram: string;
    targetFundingDate: string;
    loanIntention: string;
    originator: string;
    propertyAddress: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      fullAddress: string;
    };
    underwriting: {
      loanTerms: {
        rate: number;
        term: number;
      };
      propertyDetails: {
        value: number;
      };
    };
  };
  escrow: {
    initialFileSubmission: {
      name: string;
      url: string;
      folder: string;
      type: string;
      size: number;
    }[];
    documents: any[];
    isTbdEscrowEmail: boolean;
    isTbdInsuranceEmail: boolean;
  };
  fundingDate: string;
  wireReference: string;
  lastMessage?: string;
}

export interface BrokerFormData {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
}

export interface AgentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export const PERMISSIONS = {
  MANAGE_TEAM: 'manage_team',
  MANAGE_BROKERS: 'manage_brokers',
  MANAGE_AGENTS: 'manage_agents',
  VIEW_TEAM: 'view_team',
} as const;

export type Permission = keyof typeof PERMISSIONS; 