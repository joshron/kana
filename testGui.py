import tkinter as tk

root= tk.Tk()

canvas1 = tk.Canvas(root, width = 300, height = 300)
canvas1.pack()

def hello ():  
    label1 = tk.Label(root, text= 'P-R-A-D-O', fg='green', font=('helvetica', 12, 'bold'))
    canvas1.create_window(150, 200, window=label1)

def changeDir ():
    print('Hello')
    
button1 = tk.Button(text='Click Me',command=hello, bg='brown',fg='white')
button2 = tk.Button(text='Change directories',command=changeDir, bg='red', fg='white')
canvas1.create_window(150, 150, window=button1)

root.mainloop()