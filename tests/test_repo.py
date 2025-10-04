import unittest
from unittest.mock import patch, Mock
import repo

class TestRepoFunctions(unittest.TestCase):
    @patch('repo.requests.get')
    def test_getjson(self, mock_get):
        mock_response = Mock()
        mock_response.text = '{"key": "value"}'
        mock_get.return_value = mock_response
        result = repo.getjson('http://fakeurl')
        self.assertEqual(result, {"key": "value"})

    @patch('repo.requests.get')
    def test_getBanner(self, mock_get):
        html = '<html><head><meta property="og:image" content="banner.jpg"></head></html>'
        mock_response = Mock()
        mock_response.text = html
        mock_get.return_value = mock_response
        result = repo.getBanner('http://fakeurl')
        self.assertEqual(result, 'banner.jpg')

if __name__ == '__main__':
    unittest.main()
