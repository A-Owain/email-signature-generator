from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    name = position = email = phone = ''
    if request.method == 'POST':
        name = request.form.get('name')
        position = request.form.get('position')
        email = request.form.get('email')
        phone = request.form.get('phone')

    return render_template('index.html', name=name, position=position, email=email, phone=phone)

if __name__ == '__main__':
    app.run(debug=True)
