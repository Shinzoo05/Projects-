def main(): 
    Username= " "
    Userid=str(input("What is Ur Id??: "))
    print("-------------------||-------------------")
    print("                   \/                   ")
    print ("YOUR UserId IS = ",Userid)
    print("--------------------------------------------------")

    for char in (Userid):
        if (char== "@"):
            break
        else:
            Username=Username+char
    print("Username = ",Username)

    start_char="@"
    end_char="."
    i=0
    start=False

    print("Domain = ",end="")
    while (i < len(Userid)):
        if (Userid[i] == start_char):
            start =True
            i+=1
            continue
        if start and Userid[i]==end_char:
            break
        if start:
            print(Userid[i],end="")
        i+=1
    print("\nExtention= ",end="")
    print((Userid[i+1:]))

main()
