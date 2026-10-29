import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 5 },   
    { duration: '15s', target: 5 },  
    { duration: '5s', target: 0 },   
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], 
    http_req_failed: ['rate<0.01'],   
  },
};

export default function () {
  const res = http.get('http://host.docker.internal:3350/api/clientes');
  
  check(res, {
    'status es 200 o 401': (r) => r.status === 200 || r.status === 401,
  });

  sleep(1);
}