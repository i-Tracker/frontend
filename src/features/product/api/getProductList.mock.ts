import { HttpHandler, HttpResponse, http } from 'msw';
import { getProductListUrl } from './getProductList';

export const getMockProductList: HttpHandler = http.get(`${getProductListUrl(':category')}`, ({ params }) => {
  const { category } = params;

  if (category === 'macbook_air') {
    return HttpResponse.json(GET_MOCK_MACBOOK_AIR_LIST.success);
  } else if (category === 'i_phone') {
    return HttpResponse.json(GET_MOCK_IPHONE_LIST.success);
  } else {
    return HttpResponse.error();
  }
});

export const GET_MOCK_MACBOOK_AIR_LIST = {
  success: {
    data: [
      {
        id: 1,
        title: 'Apple 2020 맥북 에어 13, 골드, M1, 256GB, 8GB, A2337',
        category: 'Macbook Air',
        inch: 15,
        basePrice: 1300000,
        discountPercentage: 50,
        currentPrice: 650000,
        label: '역대최저가',
        imageUrl:
          'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3673409313220944-5a884691-bcaf-4fa6-a04d-8873f30865af.jpg',
        isOutOfStock: true,
      },
      {
        id: 2,
        title: 'Apple 2020 맥북 에어 13, 골드, M1, 256GB, 8GB, A2337',
        category: 'Macbook Air',
        inch: 13,
        basePrice: 1300000,
        discountPercentage: 50,
        currentPrice: 650000,
        label: '역대최저가',
        imageUrl:
          'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3673409313220944-5a884691-bcaf-4fa6-a04d-8873f30865af.jpg',
        isOutOfStock: false,
      },
      {
        id: 3,
        title: 'Apple 2020 맥북 에어 13, 골드, M1, 256GB, 8GB, A2337',
        category: 'Macbook Air',
        inch: 15,
        basePrice: 1300000,
        discountPercentage: 50,
        currentPrice: 650000,
        label: '역대최저가',
        imageUrl:
          'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3673409313220944-5a884691-bcaf-4fa6-a04d-8873f30865af.jpg',
        isOutOfStock: false,
      },
      {
        id: 4,
        title: 'Apple 2020 맥북 에어 13, 골드, M1, 256GB, 8GB, A2337',
        category: 'Macbook Air',
        inch: 13,
        basePrice: 1300000,
        discountPercentage: 50,
        currentPrice: 650000,
        label: '역대최저가',
        imageUrl:
          'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3673409313220944-5a884691-bcaf-4fa6-a04d-8873f30865af.jpg',
        isOutOfStock: false,
      },
    ],
  },
};

export const GET_MOCK_IPHONE_LIST = {
  success: {
    data: [
      {
        id: 1,
        title: 'iPhone mock data 14',
        category: 'iPhone',
        basePrice: 1530000,
        discountPercentage: 20,
        currentPrice: 1224000,
        label: '역대최저가',
        imageUrl:
          'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2357452253137038-b5589083-8ae8-4e1d-9b4f-98c8cc0bf774.jpg',
        isOutOfStock: true,
      },
      {
        id: 2,
        title: 'iPhone mock data 14',
        category: 'iPhone',
        basePrice: 1530000,
        discountPercentage: 12,
        currentPrice: 1346400,
        label: '이번주최저가',
        imageUrl:
          'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4434414951782396-0046b204-9f46-48d4-9483-c50be7ba1cbf.jpg',
        isOutOfStock: false,
      },
      {
        id: 3,
        title: 'iPhone mock data 14',
        category: 'iPhone',
        basePrice: 1530000,
        discountPercentage: 12,
        currentPrice: 1346400,
        label: '이번주최저가',
        imageUrl:
          'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4434414951782396-0046b204-9f46-48d4-9483-c50be7ba1cbf.jpg',
        isOutOfStock: false,
      },
      {
        id: 4,
        title: 'iPhone mock data 14',
        category: 'iPhone',
        basePrice: 1530000,
        discountPercentage: 12,
        currentPrice: 1346400,
        label: '이번주최저가',
        imageUrl:
          'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4434414951782396-0046b204-9f46-48d4-9483-c50be7ba1cbf.jpg',
        isOutOfStock: false,
      },
    ],
  },
};