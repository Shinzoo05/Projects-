from tkinter import *
from random import choice, shuffle
# Initialize count
count = 0
# Update count when button is clicked
def click():
    global count
    count += 1
    label_count.config(text=count)

# Transfer count to the designated box and generate password
def submit():
    global count
    length_entry.delete(0, END)   # Clear the entry box
    length_entry.insert(0, str(count)) # Insert count into the box

def generate_password():
    length = length_entry.get()
    if length.isdigit():
        length = int(length)
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?"
        password = [choice(chars) for _ in range(length)]
        shuffle(password)
        pw_entry.delete(0, END)
        pw_entry.insert(0, ''.join(password))
    else:
        pw_entry.delete(0, END)
        pw_entry.insert(0, "Invalid length!")
# Copy password to clipboard
def clipper():
    generator_root.clipboard_clear()
    generator_root.clipboard_append(pw_entry.get())

#Main application window
generator_root = Tk()
generator_root.geometry("800x800") #how first window appear
generator_root.title("PASSWORD GENERATOR") #side name of first window..
icon = PhotoImage(file='password.png') #side icon of first window..
generator_root.iconphoto(True, icon)
generator_root.config(background="#07ab9a") #f.window color(blue)
#########################################################################
# Header label(#text & color which u want to set inside window)
Inside_photo = PhotoImage(file="file.png")
label_header = Label(generator_root,
         text="#PASSWORD GENERATOR!!",
         font=('corbel', 15, 'bold'),
         fg='Black',
         bg='white',
         relief=SUNKEN,
         bd=15,
         padx=5,  #adding spaces between border and text
         pady=7,
         image = Inside_photo,
         compound='top')
label_header.pack()

# Count button
button = Button(generator_root, text="Password Digits??")
button.config(command=click) #Perforn call back of function.....
button.config(font=("Ink Free",18, "bold"))
button.config(bg='grey')
button.config(fg='black')
hand = PhotoImage(file="Hand.png")
button.config(image=hand)
button.config(compound= "top")
button.pack()

# Display count
label_count = Label(generator_root,text=count)
label_count.config(font=('Monospace', 50))
label_count.pack()

# Submit button
submit_button = Button(generator_root,
                       text='Submit',
                       command=submit)
submit_button.pack(side=RIGHT)

# Entry for designated box (password length)
length_entry = Entry(generator_root, font=("Helvetica", 24))
length_entry.config(bg='black')
length_entry.config(fg='#32de10')
length_entry.pack(padx=50)
# Entry for generated password
pw_entry = Entry(generator_root,font=("Helvetica", 24))
pw_entry.pack(pady=20)
############################################
# Frame for buttons
my_frame = Frame(generator_root)
my_frame.pack(pady=20)
############################################
# Generate password button
generate_button = Button(my_frame, text="Generate Password", command=generate_password)
generate_button.grid(row=0, column=0, padx=10)
###########################################
# Copy to clipboard button
clip_button = Button(my_frame, text="Copy To Clipboard", command=clipper)
clip_button.grid(row=0, column=1, padx=10)

generator_root.mainloop()