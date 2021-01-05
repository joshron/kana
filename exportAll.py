import os

os.system('python exporter.py --format pdf --config rangecontrol.yaml')
print('Range Control checked')

os.system('python exporter.py --format pdf --config sitesurvey.yaml')
print('Site Survey checked')

os.system('python exporter.py --format pdf --config imark.yaml')
print('iMark checked')

os.system('python exporter.py --format pdf --config unplanned.yaml')
print('Unplanned checked')

os.system('python exporter.py --format pdf --config take5.yaml')
print('Take5 checked')

os.system('python exporter.py --format pdf --config vehicle.yaml')
print('Vehicle Prestart checked')

os.system('python exporter.py --format pdf --config journey.yaml')
print('Journey Management checked')

input('Press enter to exit')