import { FiasAddressFields, FiasAddressResponse, FiasVerifyResponse, FiasFields } from '../../../../types';

export interface VerifyTestCase {
  label: string;
  addressResponse: FiasAddressResponse;
  apiVerifyResponse: FiasVerifyResponse;
  verifiedAddressResponse: FiasAddressResponse;
  verifiedFieldsWithData: FiasFields[];
}

const CASE_01 = 'empty address, empty server response';
const CASE_02 = 'empty address, not empty server response';
const CASE_03 = 'not empty address, empty server response';
const CASE_04 = 'all the fields are verified by the server and consistent';
const CASE_05 = 'all the fields are verified by the server but not consistent';
const CASE_06 = 'not all the fields are verified by the server';
const CASE_07 = 'all the fields are not verified by the server';

export const removeFieldData = (addressFields: FiasAddressFields, field: FiasFields): FiasAddressFields => {
  const element = addressFields[field];
  if (element) {
    element.removeData();
  }
  return addressFields;
};

export const verifyTestCases: VerifyTestCase[] = [
  {
    label: CASE_01,
    addressResponse: {} as FiasAddressResponse,
    apiVerifyResponse: {
      address: {} as FiasAddressResponse,
      isValid: true,
    },
    verifiedAddressResponse: {} as FiasAddressResponse,
    verifiedFieldsWithData: [],
  },
  {
    label: CASE_02,
    addressResponse: {} as FiasAddressResponse,
    apiVerifyResponse: {
      address: {
        region: {
          name: 'Свердловская',
          abbreviation: 'обл',
          fiasId: '92b30014-4d52-4e2e-892d-928142b924bf',
          actuality: true,
          id: 'e76abf09-3148-42f6-85db-51edb09e72b7',
          level: 'Region',
          okato: '65000000000',
          ifnsfl: '6600',
          ifnsul: '6600',
          postalCode: '620000',
          code: '6600000000000',
        },
      } as FiasAddressResponse,
      isValid: true,
    },
    verifiedAddressResponse: {} as FiasAddressResponse,
    verifiedFieldsWithData: [],
  },
  {
    label: CASE_03,
    addressResponse: {
      region: {
        name: 'Свердловская',
        abbreviation: 'обл',
        fiasId: '92b30014-4d52-4e2e-892d-928142b924bf',
        actuality: true,
        id: 'e76abf09-3148-42f6-85db-51edb09e72b7',
        level: 'Region',
        okato: '65000000000',
        ifnsfl: '6600',
        ifnsul: '6600',
        postalCode: '620000',
        code: '6600000000000',
      },
    } as FiasAddressResponse,
    apiVerifyResponse: {
      address: {} as FiasAddressResponse,
      isValid: true,
    },
    verifiedAddressResponse: {
      region: {
        name: 'Свердловская',
        abbreviation: 'обл',
        fiasId: '92b30014-4d52-4e2e-892d-928142b924bf',
        actuality: true,
        id: 'e76abf09-3148-42f6-85db-51edb09e72b7',
        level: 'Region',
        okato: '65000000000',
        ifnsfl: '6600',
        ifnsul: '6600',
        postalCode: '620000',
        code: '6600000000000',
      },
    } as FiasAddressResponse,
    verifiedFieldsWithData: [FiasFields.region],
  },
  {
    label: CASE_04,
    addressResponse: {
      region: {
        name: 'Санкт-Петербург',
        abbreviation: 'г',
        fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        actuality: true,
        id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
        level: 'Region',
        okato: '40000000000',
        oktmo: '40000000',
        ifnsfl: '7800',
        ifnsul: '7800',
        postalCode: '190000',
        code: '7800000000000',
      },
      street: {
        name: 'Невский',
        abbreviation: 'пр-кт',
        fiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
        actuality: true,
        id: 'c97e74ae-dd84-468b-976c-6f0cc1fbe439',
        parentFiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        level: 'Street',
        code: '78000000000088500',
      },
      house: {
        number: '100',
        fiasId: '3f0affe0-0e2e-4c52-bd20-94767632f968',
        parentFiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
        id: '3f0affe0-0e2e-4c52-bd20-94767632f968',
        structureStatus: 'None',
        estateStatus: 'House',
        postalCode: '191025',
        okato: '40298563000',
        oktmo: '40910000',
        ifnsfl: '7841',
        ifnsul: '7841',
      },
    } as FiasAddressResponse,
    apiVerifyResponse: {
      address: {
        region: {
          name: 'Санкт-Петербург',
          abbreviation: 'г',
          fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
          actuality: true,
          id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
          level: 'Region',
          okato: '40000000000',
          oktmo: '40000000',
          ifnsfl: '7800',
          ifnsul: '7800',
          postalCode: '190000',
          code: '7800000000000',
        },
        street: {
          name: 'Невский',
          abbreviation: 'пр-кт',
          fiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
          actuality: true,
          id: 'c97e74ae-dd84-468b-976c-6f0cc1fbe439',
          parentFiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
          level: 'Street',
          code: '78000000000088500',
        },
      } as FiasAddressResponse,
      isValid: true,
    },
    verifiedAddressResponse: {
      region: {
        name: 'Санкт-Петербург',
        abbreviation: 'г',
        fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        actuality: true,
        id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
        level: 'Region',
        okato: '40000000000',
        oktmo: '40000000',
        ifnsfl: '7800',
        ifnsul: '7800',
        postalCode: '190000',
        code: '7800000000000',
      },
      street: {
        name: 'Невский',
        abbreviation: 'пр-кт',
        fiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
        actuality: true,
        id: 'c97e74ae-dd84-468b-976c-6f0cc1fbe439',
        parentFiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        level: 'Street',
        code: '78000000000088500',
      },
      house: {
        number: '100',
        fiasId: '3f0affe0-0e2e-4c52-bd20-94767632f968',
        parentFiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
        id: '3f0affe0-0e2e-4c52-bd20-94767632f968',
        structureStatus: 'None',
        estateStatus: 'House',
        postalCode: '191025',
        okato: '40298563000',
        oktmo: '40910000',
        ifnsfl: '7841',
        ifnsul: '7841',
      },
    } as FiasAddressResponse,
    verifiedFieldsWithData: [FiasFields.region, FiasFields.street, FiasFields.house],
  },
  {
    label: CASE_05,
    addressResponse: {
      region: {
        name: 'Санкт-Петербург',
        abbreviation: 'г',
        fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        actuality: true,
        id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
        level: 'Region',
        okato: '40000000000',
        oktmo: '40000000',
        ifnsfl: '7800',
        ifnsul: '7800',
        postalCode: '190000',
        code: '7800000000000',
      },
      street: {
        name: 'Невский',
        abbreviation: 'пр-кт',
        fiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
        actuality: true,
        id: 'c97e74ae-dd84-468b-976c-6f0cc1fbe439',
        parentFiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        level: 'Street',
        code: '78000000000088500',
      },
      house: {
        number: '1',
        fiasId: '8f73d0ab-e876-49fb-84e6-1e4d9f452e09',
        parentFiasId: '8866e114-2bea-406a-86cb-bbe5f1506063',
        id: '8f73d0ab-e876-49fb-84e6-1e4d9f452e09',
        structureStatus: 'None',
        estateStatus: 'House',
        postalCode: '191014',
        okato: '40298564000',
        oktmo: '40911000',
        ifnsfl: '7842',
        ifnsul: '7842',
      },
    } as FiasAddressResponse,
    apiVerifyResponse: {
      address: {
        region: {
          name: 'Санкт-Петербург',
          abbreviation: 'г',
          fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
          actuality: true,
          id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
          level: 'Region',
          okato: '40000000000',
          oktmo: '40000000',
          ifnsfl: '7800',
          ifnsul: '7800',
          postalCode: '190000',
          code: '7800000000000',
        },
        street: {
          name: 'Невский',
          abbreviation: 'пр-кт',
          fiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
          actuality: true,
          id: 'c97e74ae-dd84-468b-976c-6f0cc1fbe439',
          parentFiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
          level: 'Street',
          code: '78000000000088500',
        },
      } as FiasAddressResponse,
      isValid: true,
    },
    verifiedAddressResponse: {
      region: {
        name: 'Санкт-Петербург',
        abbreviation: 'г',
        fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        actuality: true,
        id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
        level: 'Region',
        okato: '40000000000',
        oktmo: '40000000',
        ifnsfl: '7800',
        ifnsul: '7800',
        postalCode: '190000',
        code: '7800000000000',
      },
      street: {
        name: 'Невский',
        abbreviation: 'пр-кт',
        fiasId: 'd5954ac1-4745-451c-a482-acc0bd381ad0',
        actuality: true,
        id: 'c97e74ae-dd84-468b-976c-6f0cc1fbe439',
        parentFiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        level: 'Street',
        code: '78000000000088500',
      },
    } as FiasAddressResponse,
    verifiedFieldsWithData: [FiasFields.region, FiasFields.street],
  },
  {
    label: CASE_06,
    addressResponse: {
      region: {
        name: 'Санкт-Петербург',
        abbreviation: 'г',
        fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        actuality: true,
        id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
        level: 'Region',
        okato: '40000000000',
        oktmo: '40000000',
        ifnsfl: '7800',
        ifnsul: '7800',
        postalCode: '190000',
        code: '7800000000000',
      },
      street: {
        name: 'Малопрудная',
        abbreviation: 'ул',
        fiasId: '1de47f19-2de3-4d4b-9a3c-472fdc858975',
        actuality: true,
        id: '599b198f-4519-4c61-969a-c1bec6902724',
        parentFiasId: '2763c110-cb8b-416a-9dac-ad28a55b4402',
        level: 'Street',
        okato: '65401364000',
        oktmo: '65701000',
        ifnsfl: '6658',
        ifnsul: '6658',
        postalCode: '620036',
        code: '66000001000155300',
      },
      house: {
        fiasId: '22ead39c-ddcc-4c46-951d-f958750810fd',
        parentFiasId: '1de47f19-2de3-4d4b-9a3c-472fdc858975',
        id: '22ead39c-ddcc-4c46-951d-f958750810fd',
        structureStatus: 'Structure',
        estateStatus: 'None',
        postalCode: '620036',
        okato: '65401364000',
        oktmo: '65701000',
        ifnsfl: '6658',
        ifnsul: '6658',
        structureNumber: '5',
      },
    } as FiasAddressResponse,
    apiVerifyResponse: {
      address: {
        region: {
          name: 'Санкт-Петербург',
          abbreviation: 'г',
          fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
          actuality: true,
          id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
          level: 'Region',
          okato: '40000000000',
          oktmo: '40000000',
          ifnsfl: '7800',
          ifnsul: '7800',
          postalCode: '190000',
          code: '7800000000000',
        },
      } as FiasAddressResponse,
      isValid: false,
      invalidLevel: FiasFields.street,
    },
    verifiedAddressResponse: {
      region: {
        name: 'Санкт-Петербург',
        abbreviation: 'г',
        fiasId: 'c2deb16a-0330-4f05-821f-1d09c93331e6',
        actuality: true,
        id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
        level: 'Region',
        okato: '40000000000',
        oktmo: '40000000',
        ifnsfl: '7800',
        ifnsul: '7800',
        postalCode: '190000',
        code: '7800000000000',
      },
    } as FiasAddressResponse,
    verifiedFieldsWithData: [FiasFields.region],
  },
  {
    label: CASE_07,
    addressResponse: {
      region: {
        name: 'Санкт-Петербург',
        abbreviation: 'г',
        fiasId: '',
        actuality: true,
        id: 'aad1469e-54ff-4605-af4f-f016c75b84d2',
        level: 'Region',
        okato: '40000000000',
        oktmo: '40000000',
        ifnsfl: '7800',
        ifnsul: '7800',
        postalCode: '190000',
        code: '7800000000000',
      },
      house: {
        fiasId: '22ead39c-ddcc-4c46-951d-f958750810fd',
        parentFiasId: '1de47f19-2de3-4d4b-9a3c-472fdc858975',
        id: '22ead39c-ddcc-4c46-951d-f958750810fd',
        structureStatus: 'Structure',
        estateStatus: 'None',
        postalCode: '620036',
        okato: '65401364000',
        oktmo: '65701000',
        ifnsfl: '6658',
        ifnsul: '6658',
        structureNumber: '5',
      },
    } as FiasAddressResponse,
    apiVerifyResponse: {
      address: {} as FiasAddressResponse,
      isValid: false,
      invalidLevel: FiasFields.region,
    },
    verifiedAddressResponse: {} as FiasAddressResponse,
    verifiedFieldsWithData: [],
  },
];
